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
          'group relative flex h-16 items-center justify-center transition-all duration-300 outline-none hover:text-accent-primary',
          isScrolled ? 'font-semibold text-foreground-secondary' : 'text-muted-primary'
        )}
        asChild
      >
        <Link onClick={(event) => handleNavigate(event, href)} href={href}>
          {label}
          <span
            className={cn(
              'absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-accent-primary transition-all duration-450 ease-in-out group-hover:scale-x-100',
              isScrolled ? 'h-0.5' : 'h-px'
            )}
          />
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
