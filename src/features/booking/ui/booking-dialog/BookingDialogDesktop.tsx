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

import { BookingForm } from '../BookingForm';

import { BookingDialogProps } from './BookingDialog';

export const BookingDialogDesktop = (props: BookingDialogProps) => {
  const { isOpen, handleOpenChange, form, onSubmit } = props;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <div className="flex flex-col items-stretch justify-center gap-8 border border-primary px-32 py-16">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};
