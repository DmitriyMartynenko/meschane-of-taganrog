import Link from 'next/link';

import { cn } from '@/shared/lib';
import { NavigationMenuItem, NavigationMenuLink } from '@/shared/ui';

import { type NavLink } from '../model/header.types';

type NavGroupProps = {
  className?: string;
  links: NavLink[];
  isScrolled?: boolean;
};

export const NavigationMenuGroup = (props: NavGroupProps) => {
  const { className, links, isScrolled = false } = props;

  return (
    <div className={cn('flex flex-row gap-8', className)}>
      {links.map(({ label, href }, index) => (
        <NavigationMenuItem key={`${label}_${index}`}>
          <NavigationMenuLink
            className={cn(
              'flex h-16 items-center justify-center',
              isScrolled
                ? 'font-semibold text-foreground-secondary'
                : "after:absolute after:bottom-[-1px] after:left-0 after:h-0.25 after:w-0 after:bg-primary after:transition-all after:duration-600 after:content-[''] hover:after:w-full"
            )}
            asChild
          >
            <Link href={href}>{label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </div>
  );
};
