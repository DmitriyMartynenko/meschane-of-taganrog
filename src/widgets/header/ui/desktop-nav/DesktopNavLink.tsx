import { cn } from '@/shared/lib';
import { Button, NavigationMenuLink } from '@/shared/ui';

import { NavHref } from '../../model/header.types';

import { NavLink } from '../NavLink';

type DesktopNavLinkProps = {
  href: NavHref;
  label: string;
  isScrolled?: boolean;
  className?: string;
};

export const DesktopNavLink = (props: DesktopNavLinkProps) => {
  const { href, label, className, isScrolled, ...restProps } = props;

  return (
    <NavigationMenuLink
      className={cn(
        'group relative h-16 border-none p-0 font-normal normal-case',
        '[transition:color_300ms_ease-in-out,font-weight_300ms_ease-in-out]',
        isScrolled ? 'font-semibold text-foreground-secondary' : 'text-muted-primary',
        className
      )}
      asChild
      {...restProps}
    >
      <Button variant="ghost">
        <NavLink href={href}>
          {label}
          <span
            className={cn(
              'absolute -bottom-px left-0 h-0.5 w-full origin-left scale-x-0 bg-accent-primary transition-all duration-450 ease-in-out group-hover:scale-x-100',
              isScrolled ? 'h-0.5' : 'h-px'
            )}
          />
        </NavLink>
      </Button>
    </NavigationMenuLink>
  );
};
