import image1 from "@/public/images/general/latinbiz.png";
import image2 from "@/public/images/user/keely.webp";
import image3 from "@/public/images/user/amanda.webp";
import image4 from "@/public/images/user/amy.webp";

import { Teacher } from "@/types/teacher";

export const newsData: Teacher[] = [
    {
        id: 1,
        name: "Latin Biz Today",
        designation: "https://latinbusinesstoday.com/travel-getaway-visit-fort-lauderdales-excellent-yoga-studios/",
        image: image1,
        content: "Heather's "
    },
    {
        id: 2,
        name: "Deco Drive: Christmas in July",
        designation: "https://wsvn.com/entertainment/deco-drive/summer-yuletide-santa-heads-to-soflo-for-las-olas-annual-christmas-in-july-celebration/",
        image: image2,
        content: "Keely first "
    },
    {
        id: 3,
        name: "Shoutout Miami",
        designation: "https://shoutoutmiami.com/meet-heather-artman-owner-las-olas-yoga/",
        image: image3,
        content: "Being a gymnast "
    },
    {
        id: 4,
        name: "Best of Ft Lauderdale 2023",
        designation: "https://fortlauderdalemagazine.com/the-best-of-fort-lauderdale-2023/",
        image: image4,
        content: "After her first "
    },
];
