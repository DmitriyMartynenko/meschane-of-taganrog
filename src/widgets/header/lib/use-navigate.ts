'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import { NavHref } from '../model/header.types';

type OnNavigateEventHandler = Parameters<
  NonNullable<ComponentProps<typeof Link>['onNavigate']>
>['0'];

export const useNavigate = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (href: NavHref, event: OnNavigateEventHandler | null = null) => {
    const [targetPath, hash] = href.split('#');

    const isSamePage = pathname === targetPath;

    if (isSamePage && hash) {
      const element = document.getElementById(hash);

      if (element) {
        event?.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    } else if (isSamePage && !hash) {
      event?.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', targetPath);
    } else {
      event?.preventDefault();
      router.push(href);
    }
  };

  return handleNavigate;
};
