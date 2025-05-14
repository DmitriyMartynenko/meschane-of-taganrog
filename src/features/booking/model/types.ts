import { z } from 'zod';

import { BookingFormSchema } from './schemas';

export type BookingForm = z.infer<typeof BookingFormSchema>;

export type UniqueField = keyof Pick<BookingForm, 'phone' | 'email'>;
