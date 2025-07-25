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
    buttonText: 'Start Your 3-Week Unlimited'
  },
  {
    id: 1,
    title: "Single Class",
    subtitle: "One yoga class",
    price: 30,
    perX: "/class",
    href: '/schedule',
    buttonText: 'Book Class'
  },
  {
    id: 2,
    title: "Unlimited Member",
    subtitle: "Unlimited Yoga and Guest Passes*. 10% Off Retail, Workshops & Events",
    popular: true,
    price: 159,
    perX: "/month",
    href: 'https://momence.com/m/137236',
    buttonText: 'Join Unlimited Membership'
  },
  {
    id: 3,
    title: "Limited Member",
    subtitle: "4 classes per month",
    price: 79,
    perX: "/month",
    href: 'https://momence.com/m/136480',
    buttonText: 'Choose Limited Membership'
  },
  {
    id: 4,
    title: "10-Class Card",
    subtitle: "10 classes to be used over a one-year period",
    price: 240,
    perX: "",
    href: 'https://momence.com/m/136479',
    buttonText: 'Buy 10-Class Card'
  },
  {
    id: 5,
    title: "Annual Unlimited",
    subtitle: "Our unlimited membership at an annual discount",
    price: 1620,
    perX: "/year",
    href: 'https://momence.com/m/136485',
    buttonText: 'Get Annual Membership'
  },
  {
    id: 6,
    title: "Six-Month Unlimited",
    subtitle: "Unlimited classes for 6 months",
    price: 850,
    perX: "",
    href: 'https://momence.com/m/141489',
    buttonText: 'Get Six-Month Unlimited'
  },
  {
    id: 6,
    title: "One Week Traveler's Pass",
    subtitle: "Unlimited classes for visitors for one week (one-time only)",
    price: 59,
    perX: "",
    href: 'https://momence.com/m/478019',
    buttonText: 'Get Traveler Pass'
  }
];

export default pricingData;
