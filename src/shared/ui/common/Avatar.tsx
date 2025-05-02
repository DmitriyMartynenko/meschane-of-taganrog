'use client';

import { type ComponentProps } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '../../lib/utils/cn';

export const Avatar = (props: ComponentProps<typeof AvatarPrimitive.Root>) => {
  const { className, ...restProps } = props;

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...restProps}
    />
  );
};

export const AvatarImage = (props: ComponentProps<typeof AvatarPrimitive.Image>) => {
  const { className, ...restProps } = props;

  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...restProps}
    />
  );
};

export const AvatarFallback = (props: ComponentProps<typeof AvatarPrimitive.Fallback>) => {
  const { className, ...restProps } = props;

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn('bg-muted flex size-full items-center justify-center rounded-full', className)}
      {...restProps}
    />
  );
};
