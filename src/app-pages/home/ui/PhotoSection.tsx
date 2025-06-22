'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';

import { Container, HeadingTitle, ImageViewer, Section } from '@/shared/ui';

import meschane1 from '../assets/images/meschane-1.png';
import meschane2 from '../assets/images/meschane-2.png';
import meschane3 from '../assets/images/meschane-3.png';

const MESCHANE_IMAGES = [meschane1, meschane2, meschane3];

export const PhotoSection = () => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>('');
  const [openViewer, setOpenViewer] = useState<boolean>(false);

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
    setOpenViewer(true);
  };

  return (
    <Section className="flex bg-background-secondary" id="photo-section">
      <Container className="flex gap-16 py-16">
        <HeadingTitle className="text-center">
          Мещане <span className="whitespace-nowrap">г. Таганрога</span>
        </HeadingTitle>
        <div className="flex gap-8">
          {MESCHANE_IMAGES.map((image) => (
            <Image
              key={image.src}
              className="cursor-pointer rounded-xl transition-transform hover:scale-105"
              src={image}
              alt="Фотография мещан"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </Container>
      <ImageViewer
        open={openViewer}
        onOpenChange={setOpenViewer}
        image={selectedImage}
        alt="Увеличенная фотография мещан"
      />
    </Section>
  );
};
