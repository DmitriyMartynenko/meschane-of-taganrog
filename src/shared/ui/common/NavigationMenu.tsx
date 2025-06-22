import { type ComponentProps } from 'react';
import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { cn } from '../../lib/utils/cn';

export const NavigationMenu = (
  props: ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
  }
) => {
  const { className, children, viewport = true, ...restProps } = props;

  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'group/navigation-menu relative flex flex-1 justify-center items-center max-w-max ',
        className
      )}
      {...restProps}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
};

export const NavigationMenuList = (props: ComponentProps<typeof NavigationMenuPrimitive.List>) => {
  const { className, ...restProps } = props;

  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn('group flex justify-center items-center flex-1 gap-1 list-none', className)}
      {...restProps}
    />
  );
};

export const NavigationMenuItem = (props: ComponentProps<typeof NavigationMenuPrimitive.Item>) => {
  const { className, ...restProps } = props;

  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...restProps}
    />
  );
};

export const navigationMenuTriggerStyle = cva(
  'group inline-flex justify-center items-center w-max h-9 px-4 py-2 rounded-md bg-background  text-sm font-medium outline-none transition-[color,box-shadow] hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-1'
);

export const NavigationMenuTrigger = (
  props: ComponentProps<typeof NavigationMenuPrimitive.Trigger>
) => {
  const { className, children, ...restProps } = props;

  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...restProps}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] size-3 ml-1 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
};

export const NavigationMenuContent = (
  props: ComponentProps<typeof NavigationMenuPrimitive.Content>
) => {
  const { className, ...restProps } = props;

  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto',
        'group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none',
        className
      )}
      {...restProps}
    />
  );
};

export const NavigationMenuViewport = (
  props: ComponentProps<typeof NavigationMenuPrimitive.Viewport>
) => {
  const { className, ...restProps } = props;

  return (
    <div className={cn('absolute top-full left-0 flex justify-center isolate z-50')}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'origin-top-center relative h-[var(--radix-navigation-menu-viewport-height)] w-full mt-1.5 border rounded-md shadow bg-popover overflow-hidden text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          className
        )}
        {...restProps}
      />
    </div>
  );
};

export const NavigationMenuLink = (props: ComponentProps<typeof NavigationMenuPrimitive.Link>) => {
  const { className, ...restProps } = props;

  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        'relative text-foreground-muted text-center cursor-pointer transition-[color,font-weight] duration-300 ease-in-out hover:text-accent-primary',
        className
      )}
      {...restProps}
    />
  );
};

export const NavigationMenuIndicator = (
  props: ComponentProps<typeof NavigationMenuPrimitive.Indicator>
) => {
  const { className, ...restProps } = props;

  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'flex justify-center items-end top-full h-1.5 overflow-hidden z-[1] data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className
      )}
      {...restProps}
    >
      <div className="relative top-[60%] w-2 h-2 rounded-tl-sm bg-border shadow-md rotate-45" />
    </NavigationMenuPrimitive.Indicator>
  );
};
