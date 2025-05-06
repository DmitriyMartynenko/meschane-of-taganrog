import { z } from 'zod';

import { PhoneField } from '@/shared/model';

export const InlineConsultationFormSchema = z.object({
  phone: PhoneField,
});
