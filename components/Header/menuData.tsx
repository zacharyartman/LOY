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
    title: "Classes",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Class Types",
        newTab: false,
        path: "/classes",
      },
      {
        id: 22,
        title: "Private Sessions",
        newTab: false,
        path: "/private-sessions",
      },
    ],

  },
  {
    id: 3,
    title: "Pricing",
    newTab: false,
    path: "/pricing",
  },
  {
    id: 4,
    title: "Workshops",
    newTab: false,
    path: "/workshops-events",
  },
  {
    id: 5,
    title: "Teacher Training",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "200-Hour Teacher Training",
        newTab: false,
        path: "/200-hour-teacher-training",
      },
      {
        id: 52,
        title: "300-Hour Teacher Training",
        newTab: false,
        path: "/300-hour-teacher-training",
      },
    ],
  },
  {
    id: 6,
    title: "Retreats",
    newTab: false,
    path: "/retreats",
  },
  {
    id: 7,
    title: "Teachers",
    newTab: false,
    path: "/teachers",
  },
  {
    id: 8,
    title: "About",
    newTab: false,
    path: "/about"
  }
];

export default menuData;
