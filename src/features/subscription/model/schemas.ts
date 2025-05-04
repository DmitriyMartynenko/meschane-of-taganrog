import { z } from 'zod';

import { EmailField } from '@/shared/model';

export const SubscriptionFormSchema = z.object({
  email: EmailField,
});
