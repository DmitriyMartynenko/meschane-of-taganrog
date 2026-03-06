'use client';

import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(() => {
    return typeof window !== 'undefined' ? window.matchMedia(query).matches : false;
  });

  const listener = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    mediaQueryList.addEventListener('change', listener);

    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query, listener]);

  return matches;
};
