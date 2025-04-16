'use client';

import { useEffect, useState } from 'react';

import { NavigationMenu, NavigationMenuList } from '@/shared/ui/common/NavigationMenu';

import { NavigationMenuGroup } from './NavigationMenuGroup';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 w-full py-7 border-b-1 transition-all duration-300 ease-in-out z-1 ${isScrolled ? 'border-b-transparent backdrop-blur-lg shadow-lg' : 'border-b-foreground-muted/32 bg-transparent shadow-none'}`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex flex-row justify-between gap-64">
          <NavigationMenuGroup links={['Главная', 'О мещанах', 'Анонсы']} isScrolled={isScrolled} />
          <NavigationMenuGroup
            links={['Фото и видео', 'ТГЛИАМЗ', 'Контакты']}
            isScrolled={isScrolled}
          />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
