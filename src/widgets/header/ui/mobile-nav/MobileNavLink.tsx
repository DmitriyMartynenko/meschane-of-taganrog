'use client';

import { cn } from '@/shared/lib';
import { Button, DrawerClose } from '@/shared/ui';

type MobileNavLinkProps = {
  label: string;
  onLinkClick: () => void;
  className?: string;
};

export const MobileNavLink = (props: MobileNavLinkProps) => {
  const { label, onLinkClick, className } = props;

  return (
    <DrawerClose className={cn('p-2 capitalize', className)} onClick={onLinkClick} asChild>
      <Button variant="ghost" lightText>
        {label}
      </Button>
    </DrawerClose>
  );
};
