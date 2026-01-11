import { z } from 'zod';

import { EmailField, NameField, PhoneField } from '@/shared/model';

export const InlineBookingFormSchema = z.object({
  phone: PhoneField,
});

export const BookingFormSchema = z.object({
  name: NameField,
  phone: PhoneField.transform((v) => {
    const digits = v.replace(/\D/g, '');
    return '+' + digits;
  }),
  email: EmailField,
});
