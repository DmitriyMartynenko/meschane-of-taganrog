import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'sonner';

import { zodResolver } from '@hookform/resolvers/zod';

import { createBooking } from '../../api/createBooking';
import { BookingFormSchema } from '../../model/schemas';
import { useBookingStore } from '../../model/store';
import { type BookingForm } from '../../model/types';

export const useBookingForm = () => {
  const { formValues, setFormValues, resetFormValues, setOpenDialog } = useBookingStore();

  const form = useForm<BookingForm>({
    resolver: zodResolver(BookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    values: {
      name: formValues.name || '',
      phone: formValues.phone || '',
      email: formValues.email || '',
    },
  });

  const { name, phone, email } = useWatch({
    control: form.control,
  });

  const onSubmit = async (data: BookingForm) => {
    const response = await createBooking(data);

    if (response.ok) {
      resetFormValues();
      setOpenDialog(false);
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
  };

  useEffect(() => {
    setFormValues({
      name: name ?? '',
      phone: phone ?? '',
      email: email ?? '',
    });
  }, [name, phone, email]);

  return {
    form,
    onSubmit,
  };
};
