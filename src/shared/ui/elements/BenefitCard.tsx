import { type ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '../../lib/utils/cn';

type BenefitCardProps = {
  children: ReactNode;
  className?: string;
  icon: string;
  iconAlt: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  const { children, className, icon, iconAlt } = props;

  return (
    <div
      className={cn(
        'flex flex-col gap-8 min-h-[250px] px-6 py-8 border border-border-primary shadow',
        className
      )}
    >
      <Image src={icon} alt={iconAlt} />
      <div className="flex items-center grow">
        <p>{children}</p>
      </div>
    </div>
  );
};
