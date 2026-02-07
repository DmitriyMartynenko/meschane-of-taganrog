import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

import { NavHref } from '../model/header.types';

type OnNavigateEventHandler = Parameters<
  NonNullable<ComponentProps<typeof Link>['onNavigate']>
>['0'];

export const useAnchorScroll = () => {
  const pathname = usePathname();

  const onAnchorClick = (event: OnNavigateEventHandler, href: NavHref) => {
    const [targetPath, hash] = href.split('#');

    const isSamePage = pathname === targetPath;

    if (isSamePage && hash) {
      const element = document.getElementById(hash);

      if (element) {
        event.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });

        window.history.pushState(null, '', href);
      }
    } else if (isSamePage && !hash) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      window.history.pushState(null, '', targetPath);
    }
  };

  return onAnchorClick;
};
