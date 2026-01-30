import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/shared/lib';

type BackgroundImageProps = {
  className?: string;
  src: string | StaticImageData;
  gradientFrom?: string;
  gradientTo?: string;
};

export const BackgroundImage = (props: BackgroundImageProps) => {
  const {
    className,
    src,
    gradientFrom = 'rgba(30,20,10,0.75)',
    gradientTo = 'rgba(30,20,10,0.75)',
  } = props;

  return (
    <>
      <Image
        className={cn('object-cover object-center', className)}
        src={src}
        alt=""
        fill
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
        aria-hidden
      />
    </>
  );
};
