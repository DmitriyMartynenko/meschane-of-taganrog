'use client';

import { ComponentProps } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/shared/lib';

export const Popover = (props: ComponentProps<typeof PopoverPrimitive.Root>) => {
  const { ...restProps } = props;

  return <PopoverPrimitive.Root data-slot="popover" {...restProps} />;
};

export const PopoverTrigger = (props: ComponentProps<typeof PopoverPrimitive.Trigger>) => {
  const { ...restProps } = props;

  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...restProps} />;
};

export const PopoverContent = (props: ComponentProps<typeof PopoverPrimitive.Content>) => {
  const { className, align = 'center', sideOffset = 4, ...restProps } = props;

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-background-primary p-4 text-foreground-primary shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          className
        )}
        {...restProps}
      />
    </PopoverPrimitive.Portal>
  );
};

export const PopoverAnchor = (props: ComponentProps<typeof PopoverPrimitive.Anchor>) => {
  const { ...restProps } = props;

  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...restProps} />;
};
