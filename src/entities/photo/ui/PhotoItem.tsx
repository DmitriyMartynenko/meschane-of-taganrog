import Image from 'next/image';

import { cn } from '@/shared/lib';

import { Photo } from '../model/photo.types';

type PhotoItemProps = {
  className?: string;
  photo: Photo;
  onPhotoClick: (photo: Photo) => void;
};

export const PhotoItem = (props: PhotoItemProps) => {
  const { className, photo, onPhotoClick } = props;

  return (
    <div
      className={cn(
        'group relative basis-1/3 cursor-pointer overflow-hidden rounded-2xl',
        className
      )}
      key={photo.image.src}
      onClick={() => onPhotoClick(photo)}
    >
      <div className="absolute inset-0 z-1 bg-black/50 opacity-0 transition-opacity duration-450 group-hover:opacity-100" />
      <Image
        className="aspect-2/3 size-full scale-101 object-cover object-bottom transition-transform duration-450 ease-in-out select-none group-hover:scale-106"
        src={photo.image}
        alt="Фотография"
      />
      <div className="absolute inset-0 z-1 flex items-center justify-center opacity-0 transition-opacity duration-450 group-hover:opacity-100">
        <span className="font-semibold tracking-widest text-secondary">Посмотреть фото</span>
      </div>
    </div>
  );
};
