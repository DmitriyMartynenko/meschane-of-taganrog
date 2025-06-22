import { StaticImageData } from 'next/image';

type ExcursionTheme = 'быт' | 'архитектура' | 'литература';

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
