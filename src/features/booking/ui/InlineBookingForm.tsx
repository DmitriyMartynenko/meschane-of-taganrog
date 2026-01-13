'use client';

import { InlineForm, type InlineFormControls } from '@/shared/ui';

import { useInlineBookingForm } from '../model/use-inline-booking-form';

import { BookingDialog } from './BookingDialog';

type InlineBookingFormProps = InlineFormControls;

export const InlineBookingForm = (props: InlineBookingFormProps) => {
  const { ...restProps } = props;

  const { form, onSubmit } = useInlineBookingForm();

  return (
    <>
      <InlineForm form={form} name="phone" onSubmit={onSubmit} {...restProps} />
      <BookingDialog />
    </>
  );
};
