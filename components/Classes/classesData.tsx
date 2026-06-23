import image1 from "@/public/images/features/beginner-yoga-near-me.webp";
import image2 from "@/public/images/features/best-yoga-in-fort-lauderdale.webp";
import image5 from "@/public/images/features/candlelight-yin.jpeg";
import image3 from "@/public/images/features/vinyasa-yoga-class-near-me.webp";
import image4 from "@/public/images/features/yoga-for-seniors.webp";
import { Class } from "@/types/class";

const classesData: Class[] = [
  {
    alt: "yoga for beginners fort lauderdale",
    description:
      "New to yoga? Start here. Foundations is a beginner-friendly yoga class that focuses on foundational yoga poses, breathing techniques, alignment, balance, flexibility, and strength. You'll learn proper form, build confidence, and develop a strong foundation for a safe and sustainable yoga practice. Perfect for beginners, those returning to yoga, or anyone who enjoys a slower-paced class.",
    icon: image1,
    id: 1,
    title: "Foundations",
  },
  {
    alt: "slow paced vinyasa in a non-heated flow class",
    description:
      "Slow Flow is a non-heated vinyasa yoga class that moves at a mindful pace, allowing more time to explore each pose and connect breath with movement. This all-levels yoga class helps improve flexibility, balance, strength, and body awareness while creating space for relaxation and stress relief. Suitable for both beginners and experienced practitioners seeking a slower, more intentional practice.",
    icon: image2,
    id: 2,
    title: "Slow Flow",
  },
  {
    alt: "vinyasa flow class",
    description:
      "Flow is an energizing vinyasa yoga class that links breath and movement through creative sequences designed to build strength, flexibility, balance, and endurance. Expect sun salutations, standing poses, balance work, and opportunities to deepen your practice. This non-heated yoga class is ideal for students with some yoga experience who enjoy a more dynamic pace.",
    icon: image3,
    id: 3,
    title: "Flow",
  },
  {
    alt: "restorative relaxing yoga",
    description:
      "A deeply renewing, slow-paced practice dedicated entirely to conscious rest, nervous system regulation, and deep mental decompression. Unlike active physical flows, true restorative yoga is about yielding rather than stretching. Using a variety of supportive props, including bolsters, blankets, and blocks, your body is placed in fully supported postures held for extended periods, allowing your muscles, nervous system, and mind to completely release chronic tension without physical effort.",
    icon: image4,
    id: 4,
    title: "Restore",
  },
  {
    alt: "candlelight yin yoga",
    description:
      "The ultimate evening reset. This deeply relaxing, non-heated class begins with 45 minutes of Yin Yoga, using long-held floor postures to gently improve flexibility, mobility, and release tension in the connective tissues and joints. The final 15 minutes are dedicated to Yoga Nidra, a guided meditation often called \"yogic sleep,\" designed to calm the nervous system, reduce stress, and promote deep rest. Perfect for all levels and anyone looking to unwind, sleep better, and leave feeling grounded and restored.",
    icon: image5,
    id: 5,
    title: "Candlelight Yin & Nidra",
  },
];

export default classesData;
