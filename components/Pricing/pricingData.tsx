import { Price } from "@/types/pricing";

const pricingData: Price[] = [
  {
    id: 0,
    title: "New Client Intro",
    subtitle: "Three Weeks of Unlimited Yoga",
    price: 79,
    perX: "",
    popular: true,
    href: 'https://momence.com/m/136483',
    buttonText: 'Learn More'
  },
  {
    id: 1,
    title: "Single Class",
    subtitle: "One yoga class",
    price: 30,
    perX: "/class",
    popular: false,
    href: '/schedule',
    buttonText: 'Book Class'
  },
  {
    id: 2,
    title: "Unlimited Member",
    subtitle: "Unlimited Yoga and Guest Passes*. 10% Off Retail, Workshops & Events",
    price: 159,
    perX: "/month",
    popular: true,
    href: 'https://momence.com/m/137236',
    buttonText: 'Learn More'
  },
  {
    id: 3,
    title: "Limited Member",
    subtitle: "4 classes per month",
    price: 79,
    perX: "/month",
    popular: false,
    href: 'https://momence.com/m/136480',
    buttonText: 'Learn More'
  },
  {
    id: 4,
    title: "10-Class Card",
    subtitle: "10 classes to be used over a one-year period",
    price: 240,
    perX: "",
    popular: false,
    href: 'https://momence.com/m/136479',
    buttonText: 'Learn More'
  },
  {
    id: 5,
    title: "Annual Unlimited",
    subtitle: "Our unlimited membership at an annual discount",
    price: 1620,
    perX: "/year",
    popular: false,
    href: 'https://momence.com/m/136485',
    buttonText: 'Learn More'
  },
  {
    id: 6,
    title: "Summer Unlimited",
    subtitle: "Unlimited classes Memorial Day through Labor Day",
    price: 447,
    perX: "",
    popular: false,
    href: 'https://momence.com/m/183811',
    buttonText: 'Learn More'
  },
  {
    id: 7,
    title: "Six-Month Unlimited",
    subtitle: "Unlimited classes for 6 months",
    price: 850,
    perX: "",
    popular: false,
    href: 'https://momence.com/m/141489',
    buttonText: 'Learn More'
  },
];

export default pricingData;
