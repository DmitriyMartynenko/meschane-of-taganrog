import { User } from '@/shared/types/user';

export type Review = {
  id?: string;
  author: User;
  text?: string;
  rating: number;
};
