'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { InlineForm } from '@/shared/ui';

import { InlineBookingFormSchema } from '../model/schemas';
import { useBookingStore } from '../model/store';

import { BookingDialog } from './BookingDialog';

type InlineBookingForm = z.infer<typeof InlineBookingFormSchema>;

export const InlineBookingForm = () => {
  const setPhone = useBookingStore((state) => state.setPhone)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const form = useForm<InlineBookingForm>({
    resolver: zodResolver(InlineBookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (data: InlineBookingForm) => {
    setPhone(data.phone)
    setIsDialogOpen((prev) => !prev);
  };

  return (
    <>
      <InlineForm
        form={form}
        name="phone"
        label="Записаться на экскурсию"
        buttonText="Заказать экскурсию"
        onSubmit={onSubmit}
      />
      <BookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
};
