import Link from 'next/link';

import { cn } from '@/shared/lib';
import { NavigationMenuItem, NavigationMenuLink } from '@/shared/ui';

type HeaderLinkProps = {
  href: string;
  label: string;
  isScrolled?: boolean;
  className?: string;
};

export const HeaderLink = (props: HeaderLinkProps) => {
  const { href, label, className, isScrolled } = props;

  return (
    <NavigationMenuItem className={cn(className)}>
      <NavigationMenuLink
        className={cn(
          'flex h-16 items-center justify-center',
          isScrolled
            ? 'font-semibold text-foreground-secondary'
            : 'after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-600 after:ease-in-out hover:after:w-full'
        )}
        asChild
      >
        <Link href={href}>{label}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
