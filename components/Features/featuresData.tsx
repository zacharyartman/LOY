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
      "Focuses on foundational yoga poses, breathwork and meditation to promote alignment, flexibility, strength, balance and mental clarity. Great for beginners or anyone that likes to move more slowly in their yoga practice.",
  },
  {
    id: 2,
    icon: image2,
    title: "Slow Flow",
    description:
      "Flow but at a slower pace, with fewer transitions and more time to linger in poses. This nourishing practice is for those times when you want the movement of a flow class at a more meditative pace. Great for those newer to yoga as well as seasoned yogis.",
  },
  {
    id: 3,
    icon: image3,
    title: "Flow",
    description:
      "An energetic practice that moves through a sequence of poses, connecting breath to movement through creative transitions and incorporating sun salutations, standing poses and balance poses. Yoga experience recommended.",
  },
  {
    id: 4,
    icon: image4,
    title: "Restore",
    description:
      "Indulge in the tranquility of Restorative Yoga, a soothing practice that fosters deep healing and inner calm. Poses are held for extended periods, comfortably supported by props to encourage profound relaxation. This class complements more active practices and also serves as a standalone experience to restore and calm the nervous system.",
  },
];

export default featuresData;
