'use client';

import { useState } from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Heading,
  HeadingHighlight,
  HeadingTitle,
} from '@/shared/ui';

import { useBookingDialogStore } from '../model/booking-dialog.store';
import { useBookingFormStore } from '../model/booking-form.store';
import { useBookingForm } from '../model/use-booking-form';

import { BookingForm } from './BookingForm';
import { CancelBookingAlert } from './CancelBookingAlert';

export const BookingDialog = () => {
  const [showCancelAlert, setShowCancelAlert] = useState<boolean>(false);

  const { form, onSubmit, isDirty: isFormDirty } = useBookingForm();

  const setPhone = useBookingFormStore((state) => state.setPhone);

  const isOpen = useBookingDialogStore((state) => state.isOpen);
  const close = useBookingDialogStore((state) => state.close);

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
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="flex-col items-stretch gap-8" innerStroke>
          <DialogHeader>
            <Heading>
              <DialogTitle asChild>
                <HeadingTitle className="text-center font-alegreya text-5xl font-normal">
                  <HeadingHighlight>Оставьте заявку</HeadingHighlight>
                  <br />
                  Мы с вами свяжемся
                </HeadingTitle>
              </DialogTitle>
              <VisuallyHidden asChild>
                <DialogDescription />
              </VisuallyHidden>
            </Heading>
          </DialogHeader>
          <BookingForm form={form} onSubmit={onSubmit} />
        </DialogContent>
      </Dialog>
      <CancelBookingAlert
        isOpen={showCancelAlert}
        setIsOpen={setShowCancelAlert}
        onContinue={cancelBooking}
      />
    </>
  );
};
