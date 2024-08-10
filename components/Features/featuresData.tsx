import { Feature } from "@/types/feature";
import image1 from "@/public/images/features/foundations.jpg";
import image2 from "@/public/images/features/slow-flow-website.jpg";
import image3 from "@/public/images/features/Group-920.png";
import image4 from "@/public/images/features/restore-website.jpg";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: image1,
    title: "Foundations",
    description:
      "Focuses on foundational yoga poses, breathwork, and meditation to enhance alignment, flexibility, strength, balance, and mental clarity. Ideal for beginners or anyone who prefers a slower pace.",
  },
  {
    id: 2,
    icon: image2,
    title: "Slow Flow",
    description:
      "Flow at a slower pace with fewer transitions and more time in poses. A nourishing, meditative practice suitable for both beginners and seasoned yogis.",
  },
  {
    id: 3,
    icon: image3,
    title: "Flow",
    description:
      "An energetic sequence of poses, linking breath to movement with creative transitions. Includes sun salutations, standing, and balance poses. Yoga experience recommended.",
  },
  {
    id: 4,
    icon: image4,
    title: "Restore",
    description:
      "A soothing, restorative practice with extended, supported poses for deep relaxation. Complements active practices or serves as a standalone session to calm the nervous system.",
  },
];

export default featuresData;
