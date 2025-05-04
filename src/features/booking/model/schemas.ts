import { z } from 'zod';

import { PhoneField } from '@/shared/model';

export const BookingFormSchema = z.object({
  phone: PhoneField,
});
