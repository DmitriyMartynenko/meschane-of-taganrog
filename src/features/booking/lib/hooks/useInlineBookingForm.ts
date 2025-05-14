import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useBookingStore } from '../../model/store';
import { InlineBookingFormSchema } from '../../model/schemas';

type InlineBookingForm = z.infer<typeof InlineBookingFormSchema>;

export const useInlineBookingForm = () => {
  const { form: storedForm, setForm, setOpen } = useBookingStore();

  const form = useForm<InlineBookingForm>({
    resolver: zodResolver(InlineBookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { phone: '' },
  });

  const onSubmit = (data: InlineBookingForm) => {
    setForm((prev) => ({ ...prev, phone: data.phone }));
    setOpen(true);
  };

  useEffect(() => {
    form.setValue('phone', storedForm.phone, { shouldDirty: false });
  }, [storedForm.phone]);

  return {
    form,
    onSubmit,
  };
};
