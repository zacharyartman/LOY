import image1 from "@/public/images/offers/offers-1.webp";
import image2 from "@/public/images/offers/offers-2.webp";
import image3 from "@/public/images/offers/offers-3.webp";
import { Offer } from "@/types/offer";

export const offersData: Offer[] = [
    {
        id: 1,
        name: "New Students: 3 Weeks Unlimited Yoga Classes",
        price: "$79.00",
        image: image1,
        imageAlt: "TODO",
        href: "https://momence.com/m/136483",
    },
    {
        id: 2,
        name: "Unlimited Monthly Membership",
        price: "$159.00",
        image: image2,
        imageAlt: "TODO",
        href: "https://momence.com/m/137236",
    },
    {
        id: 3,
        name: "Limited Membership (4x / mo)",
        price: "$79.00",
        image: image3,
        imageAlt: "TODO",
        href: "https://momence.com/m/136480",
    },
];
