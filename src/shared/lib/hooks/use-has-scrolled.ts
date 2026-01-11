'use client';

import { useEffect, useState } from 'react';

export const useHasScrolled = (threshold: number = 50) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const onScroll = () => {
    setIsScrolled(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return {
    isScrolled,
  };
};
