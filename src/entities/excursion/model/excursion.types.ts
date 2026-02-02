import { type StaticImageData } from 'next/image';

import { EXCURSION_THEME } from './excursion.constants';

export type ExcursionTheme = (typeof EXCURSION_THEME)[keyof typeof EXCURSION_THEME];

export type Excursion = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  theme: ExcursionTheme;
  duration: number;
  price: number;
  date: Date;
  fullDescription: string;
  route: string;
  maxParticipants: number;
  rating: number;
  includes: string[];
  meetingPoint: string;
  highlights: string[];
};
