import Link from 'next/link';

import { cn } from '@/shared/lib';
import { NavigationMenuItem, NavigationMenuLink } from '@/shared/ui';

import { useAnchorScroll } from '../lib/use-anchor-scroll';
import { NavHref } from '../model/header.types';

type HeaderLinkProps = {
  href: NavHref;
  label: string;
  isScrolled?: boolean;
  className?: string;
};

export const HeaderLink = (props: HeaderLinkProps) => {
  const { href, label, className, isScrolled } = props;

  const handleNavigate = useAnchorScroll();

  return (
    <NavigationMenuItem className={cn(className)}>
      <NavigationMenuLink
        className={cn(
          'flex h-16 items-center justify-center text-muted-primary',
          isScrolled
            ? 'font-semibold text-foreground-secondary'
            : 'after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-accent-primary after:transition-all after:duration-450 after:ease-in-out hover:after:w-full'
        )}
        asChild
      >
        <Link onNavigate={(event) => handleNavigate(event, href)} href={href}>
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
