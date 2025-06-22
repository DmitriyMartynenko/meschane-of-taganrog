'use client';

import { ComponentProps } from 'react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '@/shared/lib/utils/cn';
import { buttonVariants } from '@/shared/ui/common/Button';

export const AlertDialog = ({ ...props }: ComponentProps<typeof AlertDialogPrimitive.Root>) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
};

export const AlertDialogTrigger = ({
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Trigger>) => {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />;
};

export const AlertDialogPortal = ({
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Portal>) => {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />;
};

export const AlertDialogOverlay = (props: ComponentProps<typeof AlertDialogPrimitive.Overlay>) => {
  const { className, ...restProps } = props;
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0',
        className
      )}
      {...restProps}
    />
  );
};

export const AlertDialogContent = (props: ComponentProps<typeof AlertDialogPrimitive.Content>) => {
  const { className, ...restProps } = props;

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          'fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 bg-background-primary p-6 shadow-lg duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring-primary data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg',
          className
        )}
        {...restProps}
      />
    </AlertDialogPortal>
  );
};

export const AlertDialogHeader = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="alert-dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...restProps}
    />
  );
};

export const AlertDialogFooter = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...restProps}
    />
  );
};

export const AlertDialogTitle = (props: ComponentProps<typeof AlertDialogPrimitive.Title>) => {
  const { className, ...restProps } = props;

  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn('text-lg font-semibold', className)}
      {...restProps}
    />
  );
};

export const AlertDialogDescription = (
  props: ComponentProps<typeof AlertDialogPrimitive.Description>
) => {
  const { className, ...restProps } = props;

  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn('text-sm text-foreground-primary', className)}
      {...restProps}
    />
  );
};

export const AlertDialogAction = (props: ComponentProps<typeof AlertDialogPrimitive.Action>) => {
  const { className, ...restProps } = props;

  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants({ size: 'sm', textWhite: true }), className)}
      {...restProps}
    />
  );
};

export const AlertDialogCancel = (props: ComponentProps<typeof AlertDialogPrimitive.Cancel>) => {
  const { className, ...restProps } = props;

  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), className)}
      {...restProps}
    />
  );
};
