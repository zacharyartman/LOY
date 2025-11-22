import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    newTab: false,
    path: "/",
    title: "Home",
  },
  {
    id: 7,
    newTab: false,
    path: "/black-friday",
    title: "Black Friday",
  },
  {
    hidden: true,
    id: 2,
    newTab: false,
    path: "/new-students",
    title: "New Clients",
  },
  {
    id: 3,
    newTab: false,
    submenu: [
      {
        id: 31,
        newTab: false,
        path: "/classes",
        title: "Class Types",
      },
      {
        id: 32,
        newTab: false,
        path: "/private-sessions",
        title: "Private Sessions",
      },
    ],
    title: "Classes",
  },
  {
    hidden: true,
    id: 13,
    newTab: false,
    path: "/schedule",
    title: "Class Schedule",
  },
  {
    id: 4,
    newTab: false,
    path: "/pricing",
    title: "Pricing",
  },
  {
    id: 5,
    newTab: false,
    path: "/workshops-events",
    title: "Workshops",
  },
  {
    id: 6,
    newTab: false,
    submenu: [
      {
        id: 61,
        newTab: false,
        path: "/200-hour-teacher-training",
        title: "200-Hour Teacher Training",
      },
      {
        id: 62,
        newTab: false,
        path: "/300-hour-teacher-training",
        title: "300-Hour Teacher Training",
      },
    ],
    title: "Teacher Training",
  },
  {
    id: 8,
    newTab: false,
    submenu: [
      {
        id: 81,
        newTab: false,
        path: "/about",
        title: "About the Studio",
      },
      {
        id: 82,
        newTab: false,
        path: "/teachers",
        title: "Our Team",
      },
      {
        id: 83,
        newTab: false,
        path: "/new-students#faq",
        title: "FAQs",
      },
    ],
    title: "About Us",
  },
  {
    hidden: true,
    id: 9,
    newTab: false,
    path: "/gift-cards",
    title: "Gift Cards",
  },
  {
    hidden: true,
    id: 10,
    newTab: false,
    path: "/blog",
    title: "Blog",
  },
  {
    hidden: true,
    id: 11,
    newTab: false,
    path: "/privacy-policy",
    title: "Privacy Policy",
  },
  {
    hidden: true,
    id: 12,
    newTab: false,
    path: "/terms",
    title: "Terms and Conditions",
  },
];

export default menuData;
