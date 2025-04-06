import { Offer } from "@/types/offer";

export const offersData: Offer[] = [
    {
        id: 1,
        title: "New Clients",
        items: [
            {
                id: 11,
                name: "Intro Offer: 3 Weeks for $79",
                href: "https://momence.com/m/136483",
            },
            {
                id: 12,
                name: "What to Expect",
                href: "/new-students",
            }
        ]
    },
    {
        id: 2,
        title: "Classes & Events",
        items: [
            {
                id: 21,
                name: "Schedule",
                href: "/schedule",
            },
            {
                id: 22,
                name: "Class Descriptions",
                href: "/classes",
            },
            {
                id: 23,
                name: "Upcoming Workshops",
                href: "/workshops-events",
            },        
        ]
    },
    {
        id: 3,
        title: "Teacher Trainings",
        items: [
            {
                id: 31,
                name: "200-Hour Teacher Training",
                price: "2025 Dates TBD",
                href: "/200-hour-teacher-training",
            },
            {
                id: 32,
                name: "300-Hour Teacher Training",
                price: "September 13, 2025 - March 8, 2026",
                href: "/300-hour-teacher-training",
            },
        ]
    },
    {
        id: 4,
        title: "Retreats",
        items: [
            {
                id: 41,
                name: "Sedona Soul Adventure Retreat",
                price: "Oct 9-13, 2025",
                href: "/retreats",
            },
        ]
    },
    {
        id: 5,
        title: "Download our App",
        items: [
            {
                id: 51,
                name: "iPhone App",
                href: "https://apps.apple.com/us/app/momence/id1577856009",
            },
            {
                id: 52,
                name: "Android App",
                href: "https://play.google.com/store/apps/details?id=com.ribbon.mobileApp&hl=en_US&gl=US",
            },

        ]
    },
    {
        id: 6,
        title: "Reviews & Gift Cards",
        items: [
            {
                id: 61,
                name: "Google Reviews",
                href: "https://www.google.com/maps/place/Las+Olas+Yoga/@26.119576,-80.1300724,17z/data=!4m7!3m6!1s0x88d9017a3c258cad:0x8d78f48f6f0f5e81!8m2!3d26.119576!4d-80.1300724!9m1!1b1",
            },
            {
                id: 62,
                name: "Gift Cards",
                href: "/gift-cards",
            },

        ]
    },


];
