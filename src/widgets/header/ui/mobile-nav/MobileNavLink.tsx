'use client';

import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';

import { NavHref } from '../../model/header.types';

type MobileNavLinkProps = {
  label: string;
  href: NavHref;
  onLinkClick: (href: NavHref) => void;
  className?: string;
};

export const MobileNavLink = (props: MobileNavLinkProps) => {
  const { label, href, onLinkClick, className } = props;

  const handleLinkClick = () => {
    onLinkClick(href);
  };

  return (
    <Button
      className={cn('p-2 normal-case', className)}
      variant="ghost"
      lightText
      onTouchEnd={handleLinkClick}
    >
      {label}
    </Button>
  );
};
