import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

type OnNavigateEventHandler = Parameters<
  NonNullable<ComponentProps<typeof Link>['onNavigate']>
>['0'];

export const useAnchorScroll = () => {
  const pathname = usePathname();

  const onAnchorClick = (event: OnNavigateEventHandler, href: string) => {
    const [targetPath, hash] = href.split('#');

    const isSamePage = pathname === targetPath;

    if (isSamePage && hash) {
      const element = document.getElementById(hash);

      if (element) {
        event.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });

        window.history.pushState(null, '', href);
      }
    }
  };

  return onAnchorClick;
};
