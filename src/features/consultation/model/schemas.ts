import { z } from 'zod';

import { PhoneField } from '@/shared/model';

export const ConsultationFormSchema = z.object({
  phone: PhoneField,
});
