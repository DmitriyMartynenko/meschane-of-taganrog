import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  HeadingHighlight,
  HeadingTitle,
} from '@/shared/ui';

import { useBookingStore } from '../model/store';

import { BookingForm } from './BookingForm';
import { CancelBookingDialog } from './CancelBookingDialog';

export const BookingDialog = () => {
  const { formValues, openDialog, setOpenDialog, setOpenCancelDialog } = useBookingStore();

  const isFormDirty = Boolean(formValues.name || formValues.phone || formValues.email);

  const onOpenChange = () => {
    if (isFormDirty) setOpenCancelDialog(true);
    else setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={openDialog} onOpenChange={onOpenChange}>
        <DialogContent className="flex-col items-stretch gap-8" innerStroke>
          <DialogHeader>
            <DialogTitle className="sr-only" />
            <DialogDescription className="sr-only" />
            <HeadingTitle className="text-center">
              <HeadingHighlight>Оставьте заявку</HeadingHighlight>
              <br />
              Мы с вами свяжемся
            </HeadingTitle>
          </DialogHeader>
          <BookingForm />
        </DialogContent>
      </Dialog>
      <CancelBookingDialog />
    </>
  );
};
