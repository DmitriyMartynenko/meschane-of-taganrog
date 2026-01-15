import { type User } from '@/entities/user';

export type ReviewItem = {
  id?: string;
  author: User;
  text?: string;
  rating: number;
};
