'use client';

import { type ComponentProps } from 'react';
import { XIcon } from 'lucide-react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '../../lib/utils/cn';

export const Dialog = (props: ComponentProps<typeof DialogPrimitive.Root>) => {
  const { ...restProps } = props;

  return <DialogPrimitive.Root data-slot="dialog" {...restProps} />;
};

export const DialogTrigger = (props: ComponentProps<typeof DialogPrimitive.Trigger>) => {
  const { ...restProps } = props;

  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...restProps} />;
};

export const DialogPortal = (props: ComponentProps<typeof DialogPrimitive.Portal>) => {
  const { ...restProps } = props;

  return <DialogPrimitive.Portal data-slot="dialog-portal" {...restProps} />;
};

export const DialogClose = (props: ComponentProps<typeof DialogPrimitive.Close>) => {
  const { ...restProps } = props;

  return <DialogPrimitive.Close data-slot="dialog-close" {...restProps} />;
};

export const DialogOverlay = (props: ComponentProps<typeof DialogPrimitive.Overlay>) => {
  const { className, ...restProps } = props;

  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0',
        className
      )}
      {...restProps}
    />
  );
};

type DialogContentProps = {
  innerStroke?: boolean;
} & ComponentProps<typeof DialogPrimitive.Content>;

export const DialogContent = (props: DialogContentProps) => {
  const { className, children, innerStroke = false, ...restProps } = props;

  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 bg-background-primary p-8 shadow-lg duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring-primary data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-[950px]'
        )}
        {...restProps}
      >
        <div
          className={cn(
            'flex items-center justify-center px-32 py-16',
            innerStroke && 'border border-secondary',
            className
          )}
        >
          {children}
        </div>
        <DialogPrimitive.Close className="absolute top-2 right-2 cursor-pointer rounded-xs opacity-70 ring-offset-background-primary transition-opacity outline-none hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring-primary disabled:pointer-events-none data-[state=open]:bg-accent-primary data-[state=open]:text-foreground-muted [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5">
          <XIcon />
          <span className="sr-only">Закрыть</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
};

export const DialogHeader = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...restProps}
    />
  );
};

export const DialogFooter = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...restProps}
    />
  );
};

export const DialogTitle = (props: ComponentProps<typeof DialogPrimitive.Title>) => {
  const { className, ...restProps } = props;

  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...restProps}
    />
  );
};

export const DialogDescription = (props: ComponentProps<typeof DialogPrimitive.Description>) => {
  const { className, ...restProps } = props;

  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...restProps}
    />
  );
};
