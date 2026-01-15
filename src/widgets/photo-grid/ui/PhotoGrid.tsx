'use client';

import Image from 'next/image';
import { useState } from 'react';

import { PhotoViewer } from '@/features/photo-viewing';

import { Photo } from '@/entities/photo';

interface PhotoGridProps {
  photos: Photo[];
}

export const PhotoGrid = ({ photos }: PhotoGridProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [openViewer, setOpenViewer] = useState<boolean>(false);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setOpenViewer(true);
  };

  return (
    <>
      <div className="flex gap-8">
        {photos.map((photo) => {
          const { image } = photo;
          return (
            <div className="basis-1/3" key={image.src}>
              <Image
                className="aspect-2/3 size-full cursor-pointer rounded-xl object-cover object-bottom transition-transform duration-300 hover:scale-105"
                src={image}
                alt="Фотография мещан"
                onClick={() => handlePhotoClick(photo)}
              />
            </div>
          );
        })}
      </div>
      {selectedPhoto && (
        <PhotoViewer
          open={openViewer}
          onOpenChange={setOpenViewer}
          photo={selectedPhoto}
          alt="Увеличенная фотография мещан"
        />
      )}
    </>
  );
};
