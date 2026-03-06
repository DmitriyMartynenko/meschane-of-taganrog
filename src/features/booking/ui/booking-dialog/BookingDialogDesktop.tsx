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
      <DialogContent className="hidden flex-col items-stretch gap-8 lg:grid" innerStroke>
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
        <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        <BookingForm form={form} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};
