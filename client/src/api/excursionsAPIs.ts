import api from './axios.ts';

import type { User } from '../types/index.ts';

export const getUsers = async () => {
  const response: { data: User[] } = await api.get('users/');
  return response;
};

export const addUser = async (userData: User) => {
  const response: { data: User } = await api.post('users/', userData);
  return response;
};
