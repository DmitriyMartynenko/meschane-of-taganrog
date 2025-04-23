import { NavigationMenuItem, NavigationMenuLink } from '@/shared/ui/common/NavigationMenu';

import { cn } from '@/shared/lib/utils/cn';

type NavGroupProps = {
  className?: string;
  links: string[];
  isScrolled: boolean;
};

export const NavigationMenuGroup = (props: NavGroupProps) => {
  const { className, links, isScrolled } = props;

  return (
    <div className={cn('flex flex-row gap-8', className)}>
      {links.map((link, index) => (
        <NavigationMenuItem key={`${link}_${index}`}>
          <NavigationMenuLink
            className={cn(
              isScrolled
                ? 'font-semibold text-foreground-secondary'
                : "after:absolute after:content-[''] after:left-0 after:-bottom-8 after:w-0 after:h-0.25 after:bg-primary after:transition-[width] after:duration-600 after:ease hover:after:w-full"
            )}
          >
            {link}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </div>
  );
};
