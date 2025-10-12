import { Price } from "@/types/pricing";

const pricingData: Price[] = [
  {
    buttonText: 'Start Your 3-Week Unlimited',
    href: 'https://momence.com/m/136483',
    id: 0,
    perX: "",
    popular: true,
    price: 79,
    subtitle: "Three Weeks of Unlimited Yoga",
    title: "New Client Intro"
  },
  {
    buttonText: 'Book Class',
    href: '/schedule',
    id: 1,
    perX: "/class",
    price: 30,
    subtitle: "One yoga class",
    title: "Single Class"
  },
  {
    buttonText: 'Join Unlimited Membership',
    href: 'https://momence.com/m/137236',
    id: 2,
    perX: "/month",
    popular: true,
    price: 159,
    subtitle: "Unlimited Yoga and Guest Passes*. 10% Off Retail, Workshops & Events",
    title: "Unlimited Member"
  },
  {
    buttonText: 'Choose Limited Membership',
    href: 'https://momence.com/m/136480',
    id: 3,
    perX: "/month",
    price: 79,
    subtitle: "4 classes per month",
    title: "Limited Member"
  },
  {
    buttonText: 'Buy 10-Class Card',
    href: 'https://momence.com/m/136479',
    id: 4,
    perX: "",
    price: 240,
    subtitle: "10 classes to be used over a one-year period",
    title: "10-Class Card"
  },
  {
    buttonText: 'Get Annual Membership',
    href: 'https://momence.com/m/136485',
    id: 5,
    perX: "/year",
    price: 1620,
    subtitle: "Our unlimited membership at an annual discount",
    title: "Annual Unlimited"
  },
  {
    buttonText: 'Get Six-Month Unlimited',
    href: 'https://momence.com/m/141489',
    id: 6,
    perX: "",
    price: 850,
    subtitle: "Unlimited classes for 6 months",
    title: "Six-Month Unlimited"
  },
  {
    buttonText: 'Get Traveler Pass',
    href: 'https://momence.com/m/478019',
    id: 7,
    perX: "",
    price: 59,
    subtitle: "Unlimited classes for visitors for one week (one-time only)",
    title: "One Week Traveler's Pass"
  }
];

export default pricingData;
