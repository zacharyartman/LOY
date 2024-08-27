import { Class } from "@/types/class";
import image1 from "@/public/images/features/beginner-yoga-near-me.webp";
import image2 from "@/public/images/features/best-yoga-in-fort-lauderdale.webp";
import image3 from "@/public/images/features/vinyasa-yoga-class-near-me.webp";
import image4 from "@/public/images/features/yoga-for-seniors.webp";

const classesData: Class[] = [
  {
    id: 1,
    icon: image1,
    title: "Foundations",
    alt: "yoga for beginners fort lauderdale",
    description:
      "Focuses on foundational yoga poses, breathwork, and meditation to enhance alignment, flexibility, strength, balance, and mental clarity. Ideal for beginners or anyone who prefers a slower pace.",
  },
  {
    id: 2,
    icon: image2,
    title: "Slow Flow",
    alt: "slow paced vinyasa in a non-heated flow class",
    description:
      "Flow at a slower pace with fewer transitions and more time in poses. A nourishing, meditative practice suitable for both beginners and seasoned yogis.",
  },
  {
    id: 3,
    icon: image3,
    title: "Flow",
    alt: "vinyasa flow class",
    description:
      "An energetic sequence of poses, linking breath to movement with creative transitions. Includes sun salutations, standing, and balance poses. Yoga experience recommended.",
  },
  {
    id: 4,
    icon: image4,
    title: "Restore",
    alt: "restorative relaxing yoga",
    description:
      "A soothing, restorative practice with extended, supported poses for deep relaxation. Complements active practices or serves as a standalone session to calm the nervous system.",
  },
];

export default classesData;
