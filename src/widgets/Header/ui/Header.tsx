'use client';

import { NavigationMenu, NavigationMenuList } from '@/shared/ui/common/NavigationMenu';

import { useHasScrolled } from '../hooks/useHasScrolled';
import { NAV_LINKS } from '../model/constants';

import { NavigationMenuGroup } from './NavigationMenuGroup';

import { cn } from '@/shared/lib/utils/cn';

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
          <NavigationMenuGroup
            className={cn(isScrolled && 'font-semibold text-foreground-secondary')}
            links={NAV_LINKS.slice(0, 3)}
          />
          <NavigationMenuGroup
            className={cn(isScrolled && 'font-semibold text-foreground-secondary')}
            links={NAV_LINKS.slice(3, 6)}
          />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
