import Image from 'next/image';

import { cn } from '@/shared/lib';

type FeatureCardProps = {
  className?: string;
  icon: string;
  iconAlt: string;
  text: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  const { className, icon, iconAlt, text } = props;

  return (
    <div
      className={cn(
        'group flex min-h-62.5 flex-col gap-8 border border-border-primary px-6 py-8 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1.25 hover:shadow-lg',
        className
      )}
    >
      <Image
        className="transition-transform duration-300 ease-out select-none group-hover:-translate-y-1"
        src={icon}
        alt={iconAlt}
      />
      <div className="flex grow items-center">
        <p className="leading-relaxed tracking-wide text-foreground-primary">{text}</p>
      </div>
    </div>
  );
};
