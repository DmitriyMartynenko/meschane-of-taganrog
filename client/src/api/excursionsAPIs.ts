import api from './axios.ts';

import type { User  } from '../types/index.ts';

export const getUser = async () => {
  const response: { data: User } = await api.get('excursions');
  return response;
};

export const createExcursionOrder = async (userData: User) => {
  const response: { data: User } = await api.post('excursions', userData);
  return response;
};
