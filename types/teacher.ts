import { StaticImageData } from "next/image";

export type Teacher = {
  id: number;
  name: string;
  destination?: string;
  image: StaticImageData;
  content: string;
  designation: string;
};
