'use client';

import { cn, useHasScrolled } from '@/shared/lib';
import { NavigationMenu, NavigationMenuList } from '@/shared/ui';

import { NAV_LINKS } from '../model/header.constants';

import { HeaderLink } from './HeaderLink';

const leftGroup = NAV_LINKS.slice(0, 3);
const middleGroup = NAV_LINKS.slice(3, 4);
const rightGroup = NAV_LINKS.slice(4);

export const Header = () => {
  const { isScrolled } = useHasScrolled(50);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-1 w-full border-b transition-all duration-300',
        isScrolled
          ? 'border-b-transparent bg-primary/50 shadow-lg backdrop-blur-lg'
          : 'border-b-foreground-muted/32 bg-transparent'
      )}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="gap-8">
          {leftGroup.map(({ href, label }) => (
            <HeaderLink key={href} href={href} label={label} isScrolled={isScrolled} />
          ))}
          {middleGroup.map(({ href, label }) => (
            <HeaderLink
              className="mx-8 text-lg"
              key={href}
              href={href}
              label={label}
              isScrolled={isScrolled}
            />
          ))}
          {rightGroup.map(({ href, label }) => (
            <HeaderLink key={href} href={href} label={label} isScrolled={isScrolled} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
