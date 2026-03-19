'use client';

import { ReactNode } from 'react';

import { NavHref, NavLink } from '@/widgets/header';

type ScrollIndicatorProps = {
  children: ReactNode;
  scrollTo: NavHref;
};

export const ScrollIndicator = (props: ScrollIndicatorProps) => {
  const { children, scrollTo } = props;

  return (
    <NavLink className="group flex flex-col items-center gap-2" href={scrollTo}>
      <span className="text-[10px] tracking-[0.25em] text-secondary/60 uppercase transition-colors duration-300 ease-in-out group-hover:text-secondary">
        {children}
      </span>
      <div className="flex h-8 w-5 items-start justify-center rounded-full border border-secondary/40 pt-1.5 transition-colors duration-300 ease-in-out group-hover:border-secondary">
        <div className="scroll-indicator-dot h-1.5 w-1.5 rounded-full bg-secondary" />
      </div>
    </NavLink>
  );
};
