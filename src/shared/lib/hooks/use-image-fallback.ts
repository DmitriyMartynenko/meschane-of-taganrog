'use client';

import { useCallback, useState } from 'react';

export const useImageFallback = (initialSrc?: string) => {
  const [error, setError] = useState(false);

  const showFallback = !initialSrc || error;

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  return { showFallback, handleError };
};
