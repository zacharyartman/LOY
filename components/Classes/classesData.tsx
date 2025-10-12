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
      "Focuses on foundational yoga poses, breathwork, and meditation to enhance alignment, flexibility, strength, balance, and mental clarity. Ideal for beginners or anyone who prefers a slower pace.",
    icon: image1,
    id: 1,
    title: "Foundations",
  },
  {
    alt: "slow paced vinyasa in a non-heated flow class",
    description:
      "Flow at a slower pace with fewer transitions and more time in poses. A nourishing, meditative practice suitable for both beginners and seasoned yogis.",
    icon: image2,
    id: 2,
    title: "Slow Flow",
  },
  {
    alt: "vinyasa flow class",
    description:
      "An energetic sequence of poses, linking breath to movement with creative transitions. Includes sun salutations, standing, and balance poses. Yoga experience recommended.",
    icon: image3,
    id: 3,
    title: "Flow",
  },
  {
    alt: "restorative relaxing yoga",
    description:
      "A soothing, restorative practice with extended, supported poses for deep relaxation. Complements active practices or serves as a standalone session to calm the nervous system.",
    icon: image4,
    id: 4,
    title: "Restore",
  },
  {
    alt: "candlelight yin yoga",
    description:
      "Unwind in the soft glow of candlelight with long-held floor poses that gently stretch connective tissues and release deep tension. Unlike Restore, which focuses on full support and relaxation with props, Yin invites mild sensation and mindful stillness to improve mobility and balance energy.",
    icon: image5,
    id: 5,
    title: "Candlelight Yin",
  },
];

export default classesData;
