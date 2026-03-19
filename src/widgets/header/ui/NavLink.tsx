'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';

import { useAnchorScroll } from '../lib/use-anchor-scroll';
import { NavHref } from '../model/header.types';

type NavLinkProps = {
  href: NavHref;
} & ComponentProps<typeof Link>;

export const NavLink = (props: NavLinkProps) => {
  const { href, children, ...restProps } = props;

  const handleNavigate = useAnchorScroll();

  return (
    <Link href={href} onNavigate={(event) => handleNavigate(event, href)} {...restProps}>
      {children}
    </Link>
  );
};
