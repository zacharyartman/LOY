import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "New Clients",
    newTab: false,
    hidden: true,
    path: "/new-students",
  },
  {
    id: 3,
    title: "Classes",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Class Types",
        newTab: false,
        path: "/classes",
      },
      {
        id: 32,
        title: "Private Sessions",
        newTab: false,
        path: "/private-sessions",
      },
    ],
  },
  {
    id: 13,
    title: "Class Schedule",
    newTab: false,
    hidden: true,
    path: "/schedule",
  },
  {
    id: 4,
    title: "Pricing",
    newTab: false,
    path: "/pricing",
  },
  {
    id: 5,
    title: "Workshops",
    newTab: false,
    path: "/workshops-events",
  },
  {
    id: 6,
    title: "Teacher Training",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "200-Hour Teacher Training",
        newTab: false,
        path: "/200-hour-teacher-training",
      },
      {
        id: 62,
        title: "300-Hour Teacher Training",
        newTab: false,
        path: "/300-hour-teacher-training",
      },
    ],
  },
  // {
  //   id: 7,
  //   title: "Retreats",
  //   newTab: false,
  //   path: "/retreats",
  // },
  {
    id: 8,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 81,
        title: "About the Studio",
        newTab: false,
        path: "/about",
      },
      {
        id: 82,
        title: "Our Team",
        newTab: false,
        path: "/teachers",
      },
      {
        id: 83,
        title: "FAQs",
        newTab: false,
        path: "/new-students#faq",
      },
    ],
  },
  {
    id: 9,
    title: "Gift Cards",
    newTab: false,
    path: "/gift-cards",
    hidden: true,
  },
  {
    id: 10,
    title: "Blog",
    newTab: false,
    path: "/blog",
    hidden: true,
  },
  {
    id: 11,
    title: "Privacy Policy",
    newTab: false,
    path: "/privacy-policy",
    hidden: true,
  },
  {
    id: 12,
    title: "Terms and Conditions",
    newTab: false,
    path: "/terms",
    hidden: true,
  },
];

export default menuData;
