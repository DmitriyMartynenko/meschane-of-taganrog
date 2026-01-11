import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { useBookingDialogStore } from '../../model/booking-dialog.store';
import { InlineBookingFormSchema } from '../../model/booking-form.schemas';
import { useBookingFormStore } from '../../model/booking-form.store';

type InlineBookingForm = z.infer<typeof InlineBookingFormSchema>;

export const useInlineBookingForm = () => {
  const setPhone = useBookingFormStore((state) => state.setPhone);
  const openBookingDialog = useBookingDialogStore((state) => state.open);

  const form = useForm<InlineBookingForm>({
    resolver: zodResolver(InlineBookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (data: InlineBookingForm) => {
    setPhone(data.phone);
    form.resetField('phone');

    openBookingDialog();
  };

  return {
    form,
    onSubmit,
  };
};
