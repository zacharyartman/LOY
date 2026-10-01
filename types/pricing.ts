export type Price = {
  id: number;
  // Momence membership id; the live price is fetched from Momence by this id.
  momenceId: number;
  title: string;
  subtitle: string;
  // Fallback price, shown only if Momence can't be reached.
  price: number;
  perX: string;
  popular?: true;
  href: string;
  buttonText: string;
};
