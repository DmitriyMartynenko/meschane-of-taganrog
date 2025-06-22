import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { InlineBookingFormSchema } from '../../model/schemas';
import { useBookingStore } from '../../model/store';

type InlineBookingForm = z.infer<typeof InlineBookingFormSchema>;

export const useInlineBookingForm = () => {
  const { formValues, setFormValues, setOpenDialog } = useBookingStore();

  const form = useForm<InlineBookingForm>({
    resolver: zodResolver(InlineBookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    values: {
      phone: formValues.phone || '',
    },
  });

  const onSubmit = (data: InlineBookingForm) => {
    setFormValues((prev) => ({ ...prev, phone: data.phone }));
    setOpenDialog(true);
  };

  return {
    form,
    onSubmit,
  };
};
