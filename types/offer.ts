export type OfferItem = {
  id: number;
  name: string;
  price?: string;
  href: string;
};

export type Offer = {
  id: number;
  title: string;
  items: OfferItem[];
};
