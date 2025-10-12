import { StaticImageData } from "next/image";

export type Class = {
  id: number;
  icon: StaticImageData;
  title: string;
  alt: string;
  description: string;
};