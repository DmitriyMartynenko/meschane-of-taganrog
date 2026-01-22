import { useEffect, useEffectEvent } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { zodResolver } from '@hookform/resolvers/zod';

import { createBooking } from '../api/create-booking';

import { useBookingDialogStore } from './booking-dialog.store';
import { BookingFormSchema } from './booking-form.schemas';
import { useBookingFormStore } from './booking-form.store';
import { type BookingForm } from './booking-form.types';

export const useBookingForm = () => {
  const phone = useBookingFormStore((state) => state.phone);
  const setPhone = useBookingFormStore((state) => state.setPhone);
  const closeBookingDialog = useBookingDialogStore((state) => state.close);

  const form = useForm<BookingForm>({
    resolver: zodResolver(BookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const initPhone = useEffectEvent(() => {
    form.setValue('phone', phone, { shouldDirty: true });
  });

  useEffect(() => {
    initPhone();
  }, [phone]);

  const onSubmit = async (data: BookingForm) => {
    try {
      const response = await createBooking(data);

      if (response.ok) {
        setPhone('');
        form.reset();

        closeBookingDialog();

        toast.success('Заявка успешно отправлена!', {
          description: 'Мы свяжемся с вами в течение дня',
          duration: 10000,
          position: 'bottom-center',
          closeButton: true,
        });

        return;
      }

      if (response.field) {
        form.setError(response.field, {
          type: 'server',
          message: response.message,
        });

        return;
      }

      toast.error('Ошибка', {
        description: response.message,
        duration: 10000,
      });
    } catch {
      toast.error('Ошибка', {
        description: 'Произошла неожиданная ошибка',
        duration: 10000,
      });
    }
  };

  return {
    form,
    onSubmit,
    isLoading: form.formState.isSubmitting,
    isDirty: form.formState.isDirty,
  };
};
