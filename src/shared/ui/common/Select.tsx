'use client';

import { type ComponentProps } from 'react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/shared/lib/utils/cn';

export const Select = (props: ComponentProps<typeof SelectPrimitive.Root>) => {
  const { ...restProps } = props;

  return <SelectPrimitive.Root data-slot="select" {...restProps} />;
};

export const SelectGroup = (props: ComponentProps<typeof SelectPrimitive.Group>) => {
  const { ...restProps } = props;

  return <SelectPrimitive.Group data-slot="select-group" {...restProps} />;
};

export const SelectValue = (props: ComponentProps<typeof SelectPrimitive.Value>) => {
  const { ...restProps } = props;

  return <SelectPrimitive.Value data-slot="select-value" {...restProps} />;
};

type SelectTriggerProps = {
  size?: 'sm' | 'default';
} & ComponentProps<typeof SelectPrimitive.Trigger>;

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { className, size = 'default', children, ...restProps } = props;

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-2 border border-border-primary bg-transparent px-3 py-2 text-sm font-semibold whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus:border-ring-primary focus:ring-1 focus:ring-ring-primary disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive-primary aria-invalid:ring-destructive-primary/20 data-[placeholder]:text-foreground-muted data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-muted",
        className
      )}
      {...restProps}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

export const SelectContent = (props: ComponentProps<typeof SelectPrimitive.Content>) => {
  const { className, children, position = 'popper', ...restProps } = props;

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto border bg-background-primary text-foreground-primary shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...restProps}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

export const SelectLabel = (props: ComponentProps<typeof SelectPrimitive.Label>) => {
  const { className, ...restProps } = props;

  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('px-2 py-1.5 text-xs text-foreground-muted', className)}
      {...restProps}
    />
  );
};

export const SelectItem = (props: ComponentProps<typeof SelectPrimitive.Item>) => {
  const { className, children, ...restProps } = props;

  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 py-1.5 pr-8 pl-2 text-sm font-semibold outline-hidden select-none focus:bg-accent-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...restProps}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

export const SelectSeparator = (props: ComponentProps<typeof SelectPrimitive.Separator>) => {
  const { className, ...restProps } = props;

  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...restProps}
    />
  );
};

export const SelectScrollUpButton = (
  props: ComponentProps<typeof SelectPrimitive.ScrollUpButton>
) => {
  const { className, ...restProps } = props;

  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...restProps}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
};

export const SelectScrollDownButton = (
  props: ComponentProps<typeof SelectPrimitive.ScrollDownButton>
) => {
  const { className, ...restProps } = props;

  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...restProps}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
};
