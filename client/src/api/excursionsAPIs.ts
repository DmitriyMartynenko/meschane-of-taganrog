import api from './axios.ts';

import type { User  } from '../types/index.ts';

export const fetchUser = async () => {
  const response: { data: User } = await api.get('users/');
  return response;
};

// export const addUser = async () => {

// }

// export const getExcursion

// export const createExcursionOrder = async (userData: User) => {
//   const response: { data: User } = await api.post('excursions', userData);
//   return response;
// };
