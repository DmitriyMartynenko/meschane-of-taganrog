import { z } from 'zod';

import { BookingFormSchema } from './booking-form.schemas';

export type BookingForm = z.infer<typeof BookingFormSchema>;

export type UniqueField = keyof Pick<BookingForm, 'phone' | 'email'>;
