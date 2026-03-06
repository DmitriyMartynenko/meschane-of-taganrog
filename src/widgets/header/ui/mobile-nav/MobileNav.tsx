import Image from 'next/image';
import { useState } from 'react';
import { Menu, User, X } from 'lucide-react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Logo } from '@/shared/assets';
import { cn } from '@/shared/lib';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui';

import { leftGroup, middleGroup, rightGroup } from '../../model/header.constants';

import { MobileNavLink } from './MobileNavLink';

type MobileNavProps = {
  className?: string;
  isScrolled: boolean;
};

export const MobileNav = (props: MobileNavProps) => {
  const { className, isScrolled } = props;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <div className={cn('px-4 py-3', className)}>
      <Drawer open={mobileOpen} onOpenChange={setMobileOpen} direction="top">
        <div className="flex items-center justify-between">
          <DrawerTrigger asChild>
            <Button
              className={cn(
                'gap-2 border-none p-0',
                isScrolled ? 'text-foreground-secondary' : 'text-muted-primary'
              )}
              variant="ghost"
            >
              <Menu className="size-6" />
              <span className="mt-0.5 capitalize">Меню</span>
            </Button>
          </DrawerTrigger>
          <Image
            className={cn(
              'h-auto w-10 transition-all duration-150',
              isScrolled && 'brightness-125'
            )}
            alt="Логотип проекта «Мещане Таганрога»"
            src={Logo}
          />
        </div>
        <DrawerContent className="rounded-none border-none text-center backdrop-blur-xl">
          <DrawerHeader className="flex flex-row justify-between border-b border-b-foreground-secondary/40 p-4 text-foreground-secondary">
            <DrawerClose asChild>
              <Button className="p-0" variant="ghost" lightText>
                <X className="size-6" />
              </Button>
            </DrawerClose>
            <DrawerTitle className="mt-0.5 text-xl">Меню</DrawerTitle>
            <User className="size-6" />
            <VisuallyHidden asChild>
              <DrawerDescription className="sr-only">Навигационное меню</DrawerDescription>
            </VisuallyHidden>
          </DrawerHeader>
          <nav className="flex flex-1 flex-col items-center gap-4 overflow-y-auto p-8">
            {leftGroup.map(({ href, label }) => (
              <MobileNavLink
                key={href}
                href={href}
                label={label}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            {middleGroup.map(({ href, label }) => (
              <MobileNavLink
                className="py-3 text-lg"
                key={href}
                href={href}
                label={label}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            {rightGroup.map(({ href, label }) => (
              <MobileNavLink
                key={href}
                href={href}
                label={label}
                onClose={() => setMobileOpen(false)}
              />
            ))}
          </nav>
          <div className="flex justify-center py-4">
            <div className="h-0.75 w-32 bg-foreground-secondary/25" />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
