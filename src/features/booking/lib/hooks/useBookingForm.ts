import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';

import { createBooking } from '../../api/createBooking';
import { BookingFormSchema } from '../../model/schemas';
import { useBookingStore } from '../../model/store';
import { type BookingForm } from '../../model/types';

export const useBookingForm = () => {
  const { form: storedForm, setForm, setOpen } = useBookingStore();

  const form = useForm<BookingForm>({
    resolver: zodResolver(BookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { name: storedForm.name, phone: storedForm.phone, email: storedForm.email },
  });

  const [name, phone, email] = useWatch({
    control: form.control,
    name: ['name', 'phone', 'email'],
  });

  const onSubmit = async (data: BookingForm) => {
    const response = await createBooking(data);

    if (response.ok) {
      form.reset({
        name: '',
        email: '',
        phone: '',
      });
      setOpen(false);
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
      closeButton: true,
    });
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, name, phone, email }));
  }, [name, phone, email]);

  return {
    form,
    onSubmit,
  };
};
