import Image, { type StaticImageData } from 'next/image';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui';

type ImageViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: StaticImageData | string;
  alt?: string;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const { open, onOpenChange, image, alt = 'Увеличенное изображения' } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Просмотр увеличенного изображения</DialogTitle>
          <DialogDescription className="sr-only">
            Просмотр увеличенного изображения
          </DialogDescription>
        </DialogHeader>
        <Image className="h-[50vh] w-auto rounded-xl" src={image} alt={alt} />
      </DialogContent>
    </Dialog>
  );
};
