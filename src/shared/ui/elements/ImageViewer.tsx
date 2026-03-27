'use client';

import Image, { type StaticImageData } from 'next/image';
import { MouseEvent, ReactNode, useEffect, useEffectEvent, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  MotionDiv,
  type CarouselApi,
} from '@/shared/ui';

type ImageViewerSlide = {
  image: StaticImageData;
  alt: string;
  caption?: ReactNode;
};

type ImageViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  slides: ImageViewerSlide[];
  initialIndex?: number;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const { open, onOpenChange, slides, initialIndex = 0 } = props;

  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(initialIndex);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;

    if (!(target instanceof HTMLElement) || !containerRef.current) return;
    if (containerRef.current.contains(target)) return;

    onOpenChange(false);
  };

  const onSelect = useEffectEvent(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());
  });

  useEffect(() => {
    if (!api) return;

    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!open) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenChange(false);
    };

    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, [open, onOpenChange]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <MotionDiv
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleOverlayClick}
        >
          <Button
            className="absolute top-4 right-4 z-10 p-0"
            variant="ghost"
            lightText
            onClick={() => onOpenChange(false)}
            aria-label="Закрыть"
          >
            <X className="text-inherit" size={24} strokeWidth={2.0} />
          </Button>
          <div
            className="flex max-w-4xl flex-col items-center gap-6 px-12 lg:px-24"
            ref={containerRef}
          >
            <Carousel
              className="w-full lg:px-16"
              opts={{ startIndex: initialIndex, loop: true }}
              setApi={setApi}
            >
              <CarouselContent>
                {slides.map((slide, i) => (
                  <CarouselItem key={i} className="flex items-center justify-center">
                    <MotionDiv
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex max-h-[75vh] items-center justify-center"
                    >
                      <Image
                        className="max-h-[75vh] w-auto object-contain select-none"
                        src={slide.image}
                        alt={slide.alt}
                        priority={i === initialIndex}
                      />
                    </MotionDiv>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-8 border-none p-0" variant="ghost" />
              <CarouselNext className="-right-8 border-none p-0" variant="ghost" />
            </Carousel>
            {slides[currentSlide].caption}
            {slides.length > 1 && (
              <span className="text-xs tracking-widest text-muted-primary uppercase">
                {currentSlide + 1} / {slides.length}
              </span>
            )}
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};
