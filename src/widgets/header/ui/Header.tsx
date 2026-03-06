'use client';

import { cn, useHasScrolled } from '@/shared/lib';

import { DesktopNav } from './desktop-nav/DesktopNav';
import { MobileNav } from './mobile-nav/MobileNav';

export const Header = () => {
  const { isScrolled } = useHasScrolled(50);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ease-in-out',
        isScrolled
          ? 'border-b-transparent bg-primary/75 shadow-lg backdrop-blur-lg'
          : 'border-b-muted-primary/40 bg-transparent'
      )}
    >
      <DesktopNav className="mx-auto hidden lg:block" isScrolled={isScrolled} />
      <MobileNav className="block lg:hidden" isScrolled={isScrolled} />
    </header>
  );
};
