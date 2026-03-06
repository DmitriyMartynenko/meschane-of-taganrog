import { cn } from '@/shared/lib';
import { Button, DrawerClose } from '@/shared/ui';

import { NavHref } from '../../model/header.types';

import { NavLink } from '../NavLink';

type MobileNavLinkProps = {
  href: NavHref;
  label: string;
  onClose: () => void;
  className?: string;
};

export const MobileNavLink = (props: MobileNavLinkProps) => {
  const { href, label, onClose, className } = props;

  return (
    <DrawerClose className={cn('p-2 capitalize', className)} asChild>
      <Button lightText variant="ghost">
        <NavLink href={href} onClick={onClose}>
          {label}
        </NavLink>
      </Button>
    </DrawerClose>
  );
};
