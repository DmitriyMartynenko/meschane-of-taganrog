import Link from 'next/link';

import { cn } from '@/shared/lib';
import { NavigationMenuItem, NavigationMenuLink } from '@/shared/ui';

import { type NavLink } from '../model/types';

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
          <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                isScrolled
                  ? 'font-semibold text-foreground-secondary'
                  : "after:absolute after:content-[''] after:left-0 after:-bottom-8 after:w-0 after:h-0.25 after:bg-primary after:transition-[width] after:duration-600 after:ease hover:after:w-full"
              )}
            >
              {label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </div>
  );
};
