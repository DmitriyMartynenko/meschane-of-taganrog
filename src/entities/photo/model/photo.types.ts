import { type StaticImageData } from 'next/image';

export type Photo = {
  image: StaticImageData;
  title?: string;
  author?: string;
  years?: number[];
};
