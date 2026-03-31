'use client';

import { InlineForm, type InlineFormControls } from '@/shared/ui';

import { useInlineBookingForm } from '../model/use-inline-booking-form';

import { BookingDialog } from './booking-dialog/BookingDialog';

export const InlineBookingForm = (props: InlineFormControls) => {
  const { form, onSubmit } = useInlineBookingForm();

  return (
    <>
      <InlineForm form={form} name="phone" onSubmit={onSubmit} {...props} />
      <BookingDialog />
    </>
  );
};
