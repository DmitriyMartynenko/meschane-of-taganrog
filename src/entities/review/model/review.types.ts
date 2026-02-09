import { type User } from '@/entities/user/@x/review';

export type ReviewItem = {
  id?: string;
  author: User;
  text?: string;
  rating: number;
};
