import pricingData from "@/components/Pricing/pricingData";
import { Price } from "@/types/pricing";

import { getMembershipPrices } from "./momence";

// Pricing cards with prices pulled from Momence, falling back to the
// defaults in pricingData for any membership Momence doesn't return.
export const getPricingData = async (): Promise<Price[]> => {
  const momencePrices = await getMembershipPrices();

  return pricingData.map((item) => ({
    ...item,
    price: momencePrices[item.momenceId] ?? item.price,
  }));
};
