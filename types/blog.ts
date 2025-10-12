import { StaticImageData } from "next/image";

export type Author = {
  name: string;
  image: string | StaticImageData;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: string | number;
  title: string;
  slug?: string;
  metadata: string;
  body?: string;
  mainImage: string | StaticImageData;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  seoDescription: string;
};
