import { type User } from "@/entities/user";

export type Review = {
  id?: string;
  author: User;
  text?: string;
  rating: number;
};
