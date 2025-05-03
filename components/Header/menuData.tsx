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
  {
    id: 7,
    title: "Retreats",
    newTab: false,
    path: "/retreats",
  },
  {
    id: 8,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 81,
        title: "About",
        newTab: false,
        path: "/about",
      },
      {
        id: 82,
        title: "Teachers",
        newTab: false,
        path: "/teachers",
      },
    ],
  },
];

export default menuData;
