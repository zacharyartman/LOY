import { Offer } from "@/types/offer";

export const offersData: Offer[] = [
  {
    id: 1,
    items: [
      {
        href: "https://momence.com/m/136483",
        id: 11,
        name: "Intro Offer: 3 Weeks for $79",
      },
      {
        href: "/new-students",
        id: 12,
        name: "What to Expect",
      },
    ],
    title: "New Clients",
  },
  {
    id: 2,
    items: [
      {
        href: "/schedule",
        id: 21,
        name: "Schedule",
      },
      {
        href: "/classes",
        id: 22,
        name: "Class Descriptions",
      },
      {
        href: "/workshops-events",
        id: 23,
        name: "Upcoming Workshops",
      },
    ],
    title: "Classes & Events",
  },
  {
    id: 3,
    items: [
      {
        href: "/200-hour-teacher-training",
        id: 31,
        name: "200-Hour Teacher Training",
        price: "Next Session: TBD",
      },
      {
          href: "/300-hour-teacher-training",
          id: 32,
          name: "300-Hour Teacher Training",
          price: "Next Session: TBD",
      },
    ],
    title: "Teacher Trainings",
  },
  {
    id: 4,
    items: [
      {
        href: "/retreats",
        id: 41,
        name: "Tuscany Retreat",
        price: "Oct 31 - Nov 7, 2026",
      },
    ],
    title: "Retreats",
  },
  {
    id: 5,
    items: [
      {
        href: "https://apps.apple.com/us/app/momence/id1577856009",
        id: 51,
        name: "iPhone App",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.ribbon.mobileApp&hl=en_US&gl=US",
        id: 52,
        name: "Android App",
      },
    ],
    title: "Download our App",
  },
  {
    id: 6,
    items: [
      {
        href: "https://www.google.com/maps/place/Las+Olas+Yoga/@26.119576,-80.1300724,17z/data=!4m7!3m6!1s0x88d9017a3c258cad:0x8d78f48f6f0f5e81!8m2!3d26.119576!4d-80.1300724!9m1!1b1",
        id: 61,
        name: "Google Reviews",
      },
      {
        href: "/gift-cards",
        id: 62,
        name: "Gift Cards",
      },
    ],
    title: "Reviews & Gift Cards",
  },
];
