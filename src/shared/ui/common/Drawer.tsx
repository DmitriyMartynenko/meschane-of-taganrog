'use client';

import { ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/shared/lib';

export const Drawer = (props: ComponentProps<typeof DrawerPrimitive.Root>) => {
  const { ...restProps } = props;

  return <DrawerPrimitive.Root data-slot="drawer" {...restProps} />;
};

export const DrawerTrigger = (props: ComponentProps<typeof DrawerPrimitive.Trigger>) => {
  const { ...restProps } = props;

  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...restProps} />;
};

export const DrawerPortal = (props: ComponentProps<typeof DrawerPrimitive.Portal>) => {
  const { ...restProps } = props;

  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...restProps} />;
};

export const DrawerClose = (props: ComponentProps<typeof DrawerPrimitive.Close>) => {
  const { ...restProps } = props;

  return <DrawerPrimitive.Close data-slot="drawer-close" {...restProps} />;
};

export const DrawerOverlay = (props: ComponentProps<typeof DrawerPrimitive.Overlay>) => {
  const { className, ...restProps } = props;

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-none data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0',
        className
      )}
      {...restProps}
    />
  );
};

export const DrawerContent = (props: ComponentProps<typeof DrawerPrimitive.Content>) => {
  const { className, children, ...restProps } = props;

  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className
        )}
        {...restProps}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-25 shrink-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

export const DrawerHeader = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className
      )}
      {...restProps}
    />
  );
};

export const DrawerFooter = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...restProps}
    />
  );
};

export const DrawerTitle = (props: ComponentProps<typeof DrawerPrimitive.Title>) => {
  const { className, ...restProps } = props;

  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('font-semibold', className)}
      {...restProps}
    />
  );
};

export const DrawerDescription = (props: ComponentProps<typeof DrawerPrimitive.Description>) => {
  const { className, ...restProps } = props;

  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...restProps}
    />
  );
};
