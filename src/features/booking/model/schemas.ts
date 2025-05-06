import { z } from 'zod';

import { EmailField, NameField, PhoneField } from '@/shared/model';

export const InlineBookingFormSchema = z.object({
  phone: PhoneField,
});

export const BookingFormSchema = z.object({
  name: NameField,
  phone: PhoneField,
  email: EmailField,
});
