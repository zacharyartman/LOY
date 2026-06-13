export type Price = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  perX: string;
  popular?: true;
  bestOfSpecial?: boolean;
  href: string;
  buttonText: string;
};
