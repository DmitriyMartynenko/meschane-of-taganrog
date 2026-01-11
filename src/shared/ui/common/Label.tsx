import { type ComponentProps } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/shared/lib';

export const Label = (props: ComponentProps<typeof LabelPrimitive.Root>) => {
  const { className, ...restProps } = props;

  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn('text-foreground-secondary uppercase', className)}
      {...restProps}
    />
  );
};
