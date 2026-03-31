import { cn } from '@/shared/lib';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/shared/ui';

import { leftGroup, middleGroup, rightGroup } from '../../model/header.constants';

import { DesktopNavLink } from './DesktopNavLink';

type DesktopNavProps = {
  className?: string;
  isScrolled: boolean;
};

export const DesktopNav = (props: DesktopNavProps) => {
  const { className, isScrolled } = props;

  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList className="gap-8">
        {leftGroup.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <DesktopNavLink href={href} label={label} isScrolled={isScrolled} />
          </NavigationMenuItem>
        ))}
        {middleGroup.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <DesktopNavLink
              className="mx-8 text-lg"
              href={href}
              label={label}
              isScrolled={isScrolled}
            />
          </NavigationMenuItem>
        ))}
        {rightGroup.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <DesktopNavLink href={href} label={label} isScrolled={isScrolled} />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
