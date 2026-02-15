import { z } from 'zod';

import { EmailField } from '@/shared/model';

export const InlineSubscriptionFormSchema = z.object({
  email: EmailField,
});
