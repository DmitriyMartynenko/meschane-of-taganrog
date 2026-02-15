import { Photo } from '@/entities/photo';

import { DialogDescription, ImageViewer } from '@/shared/ui';

type PhotoViewer = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photo: Photo;
};

export const PhotoViewer = (props: PhotoViewer) => {
  const { open, onOpenChange, photo } = props;
  const { image, title = 'Без названия', author = 'Неизвестный автор', years } = photo;

  const yearsText = years && years.length ? years.join(' – ') : 'Даты не известны';

  return (
    <ImageViewer
      open={open}
      onOpenChange={onOpenChange}
      image={image}
      alt={`${title}, ${author}, ${yearsText}`}
    >
      <DialogDescription className="flex flex-col gap-2 text-center text-base font-semibold">
        <span className="font-alegreya text-3xl font-semibold text-foreground-primary">
          {title}
        </span>
        <span>{author}</span>
        <span>{yearsText}</span>
      </DialogDescription>
    </ImageViewer>
  );
};
