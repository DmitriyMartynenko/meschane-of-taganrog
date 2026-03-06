'use client';

import { useState } from 'react';

import { useMediaQuery } from '@/shared/lib';
import { BREAKPOINTS } from '@/shared/model';

import { useBookingDialogStore } from '../../model/booking-dialog.store';
import { useBookingFormStore } from '../../model/booking-form.store';
import { useBookingForm } from '../../model/use-booking-form';

import { BookingFormProps } from '../BookingForm';
import { CancelBookingAlert } from '../CancelBookingAlert';

import { BookingDialogDesktop } from './BookingDialogDesktop';
import { BookingDialogMobile } from './BookingDialogMobile';

export type BookingDialogProps = {
  isOpen: boolean;
  handleOpenChange: (open: boolean) => void;
  form: BookingFormProps['form'];
  onSubmit: BookingFormProps['onSubmit'];
};

export const BookingDialog = () => {
  const [showCancelAlert, setShowCancelAlert] = useState<boolean>(false);

  const { form, onSubmit, isDirty: isFormDirty } = useBookingForm();

  const setPhone = useBookingFormStore((state) => state.setPhone);
  const isOpen = useBookingDialogStore((state) => state.isOpen);
  const close = useBookingDialogStore((state) => state.close);

  const isLarge = useMediaQuery(BREAKPOINTS.LG);

  const handleOpenChange = (open: boolean) => {
    if (open) return;

    if (isFormDirty) setShowCancelAlert(true);
    else cancelBooking();
  };

  const cancelBooking = () => {
    setPhone('');
    form.reset();
    close();
  };

  return (
    <>
      {isLarge ? (
        <BookingDialogDesktop
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          form={form}
          onSubmit={onSubmit}
        />
      ) : (
        <BookingDialogMobile
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          form={form}
          onSubmit={onSubmit}
        />
      )}
      <CancelBookingAlert
        isOpen={showCancelAlert}
        setIsOpen={setShowCancelAlert}
        onContinue={cancelBooking}
      />
    </>
  );
};
