'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';

import { cn } from '@/shared/lib';

import { useNavigate } from '../lib/use-navigate';
import { NavHref } from '../model/header.types';

type NavLinkProps = {
  className?: string;
  href: NavHref;
} & ComponentProps<typeof Link>;

export const NavLink = (props: NavLinkProps) => {
  const { className, href, children, ...restProps } = props;

  const handleNavigate = useNavigate();

  return (
    <Link
      className={cn(className)}
      href={href}
      onNavigate={(event) => handleNavigate(href, event)}
      {...restProps}
    >
      {children}
    </Link>
  );
};
