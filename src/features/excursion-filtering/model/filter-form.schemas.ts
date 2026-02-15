import { z } from 'zod';

export const FilterFormSchema = z.object({
  date: z.string(),
  theme: z.string(),
  duration: z.string(),
});
