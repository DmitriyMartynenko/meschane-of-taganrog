'use client'

import { useEffect, useRef } from 'react';

export const useUpdateEffect = (callback, deps) => {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    if (ref.current == false) {
      ref.current = true;
    } else callback();
  }, deps);
};
