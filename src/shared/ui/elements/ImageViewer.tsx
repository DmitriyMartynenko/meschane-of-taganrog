import Image, { type StaticImageData } from 'next/image';
import { type ReactNode } from 'react';

import { cn } from '@/shared/lib';
import { Dialog, DialogContent, DialogTitle } from '@/shared/ui';

type ImageViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: StaticImageData;
  alt: string;
  children?: ReactNode;
  title?: string;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const { open, onOpenChange, image, alt, children, title } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('flex-col gap-8', title && 'py-8')} innerStroke>
        <DialogTitle className={cn(!title && 'sr-only')}>{title}</DialogTitle>
        <Image className="h-[50vh] w-auto rounded-xl" src={image} alt={alt} />
        {children}
      </DialogContent>
    </Dialog>
  );
};
