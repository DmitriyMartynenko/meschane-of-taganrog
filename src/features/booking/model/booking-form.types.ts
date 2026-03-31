import { z } from 'zod';

import { BookingFormSchema } from './booking-form.schemas';

export type BookingFormFields = z.infer<typeof BookingFormSchema>;

export type UniqueField = keyof Pick<BookingFormFields, 'phone' | 'email'>;
