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
      {/* <div className="absolute inset-4 z-2 scale-110 opacity-0 transition-all duration-450 group-hover:scale-100 group-hover:opacity-100">
        <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-accent-primary" />
        <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-accent-primary" />
        <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-accent-primary" />
        <div className="absolute right-0 bottom-0 size-4 border-r-2 border-b-2 border-accent-primary" />
      </div> */}
      <Image
        className="aspect-2/3 size-full scale-101 object-cover object-bottom transition-transform duration-450 ease-in-out group-hover:scale-106"
        src={photo.image}
        alt="Фотография"
      />
      <div className="absolute inset-0 z-1 flex items-center justify-center opacity-0 transition-opacity duration-450 group-hover:opacity-100">
        <span className="font-semibold tracking-widest text-secondary">Посмотреть фото</span>
      </div>
    </div>
  );
};
