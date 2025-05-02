import { type ComponentProps } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '../../lib/utils/cn';

export const Label = ({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn('text-foreground-secondary uppercase', className)}
      {...props}
    />
  );
};
