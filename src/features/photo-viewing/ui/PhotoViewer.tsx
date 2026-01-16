import { Photo } from '@/entities/photo';

import { DialogDescription, DialogHeader, DialogTitle, ImageViewer } from '@/shared/ui';

type PhotoViewer = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photo: Photo;
  alt?: string;
};

export const PhotoViewer = (props: PhotoViewer) => {
  const { open, onOpenChange, photo, alt } = props;
  const { image, title = 'Без названия', author = 'Неизвестный автор', years } = photo;

  const yearsText = years && years.length ? years.join(' – ') : 'Даты не известны';

  return (
    <ImageViewer open={open} onOpenChange={onOpenChange} image={image} alt={alt}>
      <DialogHeader>
        <DialogTitle className="font-alegreya text-3xl font-semibold">{title}</DialogTitle>
        <DialogDescription className="flex flex-col gap-2 text-center text-base font-semibold">
          <span>{author}</span>
          <span>{yearsText}</span>
        </DialogDescription>
      </DialogHeader>
    </ImageViewer>
  );
};
