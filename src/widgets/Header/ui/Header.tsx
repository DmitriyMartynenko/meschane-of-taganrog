import { NavigationMenu, NavigationMenuList } from '@/shared/ui/navigation-menu';

import { NavigationMenuGroup } from './NavigationMenuGroup';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 container mx-auto py-7 z-1 border-b-1 border-b-foreground/16">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex flex-row justify-between gap-64">
          <NavigationMenuGroup links={['Главная', 'О мещанах', 'Анонсы']} />
          <NavigationMenuGroup links={['Фото и видео', 'ТГЛИАМЗ', 'Контакты']} />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
