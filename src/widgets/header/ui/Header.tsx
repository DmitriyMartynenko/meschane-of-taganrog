'use client';

import { useHasScrolled } from '@/shared/lib';
import { NavigationMenu, NavigationMenuList } from '@/shared/ui';

import { NAV_LINKS } from '../model/constants';

import { NavigationMenuGroup } from './NavigationMenuGroup';

import { cn } from '@/shared/lib';

export const Header = () => {
  const { isScrolled } = useHasScrolled(50);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 w-full py-7 border-b-1 transition-all duration-300 ease-in-out z-1',
        isScrolled
          ? 'border-b-transparent backdrop-blur-lg shadow-lg'
          : 'border-b-foreground-muted/32 bg-transparent shadow-none'
      )}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex flex-row justify-between gap-64">
          <NavigationMenuGroup links={NAV_LINKS.slice(0, 3)} isScrolled={isScrolled} />
          <NavigationMenuGroup links={NAV_LINKS.slice(3, 6)} isScrolled={isScrolled} />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
