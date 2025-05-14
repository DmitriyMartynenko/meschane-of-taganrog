'use client';

import { InlineForm } from '@/shared/ui';

import { useInlineBookingForm } from '../lib/hooks/useInlineBookingForm';

import { BookingDialog } from './BookingDialog';

export const InlineBookingForm = () => {
  const { form, onSubmit } = useInlineBookingForm();

  return (
    <>
      <InlineForm
        form={form}
        name="phone"
        label="Записаться на экскурсию"
        buttonText="Заказать экскурсию"
        onSubmit={onSubmit}
      />
      <BookingDialog />
    </>
  );
};
