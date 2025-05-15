import { NavigationMenuItem, NavigationMenuLink } from '@/shared/ui';

import { type NavLink } from '../model/types';

import { cn } from '@/shared/lib';

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
              isScrolled
                ? 'font-semibold text-foreground-secondary'
                : "after:absolute after:content-[''] after:left-0 after:-bottom-8 after:w-0 after:h-0.25 after:bg-primary after:transition-[width] after:duration-600 after:ease hover:after:w-full"
            )}
            href={href}
          >
            {label}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </div>
  );
};
