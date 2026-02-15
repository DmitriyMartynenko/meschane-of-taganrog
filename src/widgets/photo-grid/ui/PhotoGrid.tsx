'use client';

import { useState } from 'react';

import { PhotoViewer } from '@/features/photo-viewing';

import { PhotoItem, type Photo } from '@/entities/photo';

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
        {photos.map((photo) => (
          <PhotoItem key={photo.image.src} photo={photo} onPhotoClick={handlePhotoClick} />
        ))}
      </div>
      {selectedPhoto && (
        <PhotoViewer open={openViewer} onOpenChange={setOpenViewer} photo={selectedPhoto} />
      )}
    </>
  );
};
