type UserRole = 'admin' | 'guide' | 'user';

export type User = {
  id: string;
  fullName: string;
  avatarUrl: string;
  email: string;
  role: UserRole;
  jobTitle?: string;
};
