import { unstable_cache } from "next/cache";

// Server-only helpers for the Momence Public API (v2).
// Docs: https://api.docs.momence.com
//
// Required environment variables (set in Vercel / .env.local, never commit them):
//   MOMENCE_CLIENT_ID      - public API client id (Momence dashboard > Settings > API)
//   MOMENCE_CLIENT_SECRET  - public API client secret
//   MOMENCE_USERNAME       - email of a staff account used for API access
//   MOMENCE_PASSWORD       - password of that staff account

const MOMENCE_API_URL = "https://api.momence.com/api/v2";
const PAGE_SIZE = 100;

// How often (in seconds) prices are refreshed from Momence.
export const MOMENCE_PRICES_REVALIDATE = 3600;

type MomenceMembership = {
  id: number;
  name?: string;
  price?: number | string | null;
};

type MomenceListResponse<T> = {
  pagination?: { page: number; pageSize: number; totalCount: number };
  payload: T[];
};

const getCredentials = () => {
  const {
    MOMENCE_CLIENT_ID: clientId,
    MOMENCE_CLIENT_SECRET: clientSecret,
    MOMENCE_PASSWORD: password,
    MOMENCE_USERNAME: username,
  } = process.env;

  if (!clientId || !clientSecret || !username || !password) {
    return null;
  }
  return { clientId, clientSecret, password, username };
};

const getAccessToken = async (
  credentials: NonNullable<ReturnType<typeof getCredentials>>,
): Promise<string> => {
  const basicAuth = Buffer.from(
    `${credentials.clientId}:${credentials.clientSecret}`,
  ).toString("base64");

  const res = await fetch(`${MOMENCE_API_URL}/auth/token`, {
    body: new URLSearchParams({
      grant_type: "password",
      password: credentials.password,
      username: credentials.username,
    }),
    cache: "no-store",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  if (!res.ok) {
    throw new Error(`Momence auth failed: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("Momence auth response did not include an access_token");
  }
  return data.access_token;
};

const fetchAllMemberships = async (
  accessToken: string,
): Promise<MomenceMembership[]> => {
  const memberships: MomenceMembership[] = [];

  for (let page = 0; ; page++) {
    const url = `${MOMENCE_API_URL}/host/memberships?page=${page}&pageSize=${PAGE_SIZE}`;
    const res = await fetch(url, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!res.ok) {
      throw new Error(
        `Momence memberships request failed: ${res.status} ${await res.text()}`,
      );
    }

    const data = (await res.json()) as MomenceListResponse<MomenceMembership>;
    memberships.push(...data.payload);

    const total = data.pagination?.totalCount ?? memberships.length;
    if (data.payload.length < PAGE_SIZE || memberships.length >= total) {
      return memberships;
    }
  }
};

// Returns a map of Momence membership id -> price (in dollars).
// Throws on any failure so that a failed request is never cached.
const loadMembershipPrices = async (): Promise<Record<number, number>> => {
  const credentials = getCredentials();
  if (!credentials) {
    throw new Error("Momence API credentials are not configured");
  }

  const accessToken = await getAccessToken(credentials);
  const memberships = await fetchAllMemberships(accessToken);

  const prices: Record<number, number> = {};
  for (const membership of memberships) {
    const price = Number(membership.price);
    if (membership.price != null && Number.isFinite(price)) {
      prices[membership.id] = price;
    }
  }
  return prices;
};

const getCachedMembershipPrices = unstable_cache(
  loadMembershipPrices,
  ["momence-membership-prices"],
  { revalidate: MOMENCE_PRICES_REVALIDATE, tags: ["momence-prices"] },
);

// Fetches current membership prices from Momence, cached for
// MOMENCE_PRICES_REVALIDATE seconds. Returns an empty object if Momence
// can't be reached, so callers can fall back to default prices.
export const getMembershipPrices = async (): Promise<
  Record<number, number>
> => {
  if (!getCredentials()) {
    return {};
  }
  try {
    return await getCachedMembershipPrices();
  } catch (error) {
    console.error("Failed to load prices from Momence:", error);
    return {};
  }
};
