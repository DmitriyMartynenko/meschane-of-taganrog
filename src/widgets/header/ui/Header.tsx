'use client';

import { cn, useHasScrolled } from '@/shared/lib';
import { NavigationMenu, NavigationMenuList } from '@/shared/ui';

import { NAV_LINKS } from '../model/constants';

import { NavigationMenuGroup } from './NavigationMenuGroup';

export const Header = () => {
  const { isScrolled } = useHasScrolled(50);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 w-full py-7 border-b-1 transition-all duration-300 ease-in-out z-1',
        isScrolled
          ? 'border-b-transparent bg-primary/50 backdrop-blur-lg shadow-lg'
          : 'border-b-foreground-muted/32 bg-transparent shadow-none'
      )}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex flex-row justify-between gap-16">
          <NavigationMenuGroup links={NAV_LINKS.slice(0, 3)} isScrolled={isScrolled} />
          <NavigationMenuGroup
            className="text-lg"
            links={NAV_LINKS.slice(3, 4)}
            isScrolled={isScrolled}
          />
          <NavigationMenuGroup links={NAV_LINKS.slice(4)} isScrolled={isScrolled} />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
