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
    gradientFrom = 'rgba(30,20,10,0.85)',
    gradientTo = 'rgba(30,20,10,0.75)',
  } = props;

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden select-none', className)}
    >
      <Image
        className={cn('scale-101 object-cover object-center blur-xs', className)}
        src={src}
        alt=""
        fill
        priority
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
        aria-hidden
      />
    </div>
  );
};
