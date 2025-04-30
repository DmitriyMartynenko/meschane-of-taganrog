import { ComponentProps } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/shared/lib/utils/cn';

function Label({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn('text-foreground-secondary uppercase', className)}
      {...props}
    />
  );
}

export { Label };
