'use client';

import { useEffect, useState } from 'react';

export const useBackToFiltersVisibility = (elementId: string) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const target = document.getElementById(elementId);

    if (!target) {
      console.warn(`Element with id "${elementId}" not found`);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting);
    });

    observer.observe(target);

    return () => observer.disconnect();
  }, [elementId]);

  return isVisible;
};
