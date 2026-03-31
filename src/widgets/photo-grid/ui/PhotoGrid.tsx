'use client';

import { useState } from 'react';

import { Photo, PhotoItem } from '@/entities/photo';

import { cn } from '@/shared/lib';
import { ImageViewer } from '@/shared/ui';

type PhotoGridProps = {
  className?: string;
  photos: Photo[];
};

export const PhotoGrid = (props: PhotoGridProps) => {
  const { className, photos } = props;

  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = photos.map((photo) => ({
    image: photo.image,
    alt: [photo.title, photo.author, photo.years?.join(' – ')].filter(Boolean).join(', '),
    title: photo.title,
    author: photo.author,
    years: photo.years,
    caption: (
      <div className="flex flex-col items-center gap-1 text-center">
        {photo.title && (
          <span className="text-base tracking-wider text-foreground-secondary">{photo.title}</span>
        )}
        {photo.author && (
          <span className="text-sm tracking-widest text-muted-primary">{photo.author}</span>
        )}
        {photo.years && (
          <span className="text-sm text-muted-primary">{photo.years!.join(' – ')}</span>
        )}
      </div>
    ),
  }));

  const handlePhotoClick = (index: number) => {
    setActiveIndex(index);
    setViewerOpen(true);
  };

  return (
    <>
      <div className={cn('flex gap-4 lg:gap-6', className)}>
        {photos.map((photo, i) => (
          <PhotoItem key={photo.image.src} photo={photo} onPhotoClick={() => handlePhotoClick(i)} />
        ))}
      </div>
      <ImageViewer
        open={viewerOpen}
        onOpenChange={setViewerOpen}
        initialIndex={activeIndex}
        slides={slides}
      />
    </>
  );
};
