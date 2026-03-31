import Image from 'next/image';
import { ZoomIn } from 'lucide-react';

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
        'group relative cursor-pointer overflow-hidden border-0 border-primary',
        className
      )}
      onClick={() => onPhotoClick(photo)}
    >
      <Image
        className="aspect-2/3 size-full scale-101 object-cover object-bottom transition-transform duration-300 ease-in-out select-none group-hover:scale-106"
        src={photo.image}
        alt="Фотография"
      />
      <div className="absolute inset-0 z-1 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-12 w-12 scale-85 items-center justify-center rounded-full border border-secondary/75 transition-transform duration-300 group-hover:scale-99">
          <ZoomIn className="text-secondary" strokeWidth={1} />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-1 flex flex-col gap-1 p-5 opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100">
        <span className="text-sm tracking-widest text-secondary/80">{photo.author}</span>
        <span className="tracking-wider text-foreground-secondary">{photo.title}</span>
        <span className="text-sm text-secondary/70">
          {photo.years?.[0]} – {photo.years?.[1]}
        </span>
      </div>
    </div>
  );
};
