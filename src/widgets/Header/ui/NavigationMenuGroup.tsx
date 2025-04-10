import { cn } from '@/shared/lib/utils/cn';
import { NavigationMenuItem, NavigationMenuLink } from '@/shared/ui/navigation-menu';

type NavGroupProps = {
  className?: string;
  links: string[];
};

export const NavigationMenuGroup = (props: NavGroupProps) => {
  const { className = '', links } = props;

  return (
    <div className={cn('flex flex-row gap-8', className)}>
      {links.map((link, index) => (
        <NavigationMenuItem key={`${link}_${index}`}>
          <NavigationMenuLink>
            {link}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </div>
  );
};
