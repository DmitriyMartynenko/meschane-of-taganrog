'use client';

import Script from 'next/script';

export const ReactScan = () => (
  <Script
    src="//unpkg.com/react-scan/dist/auto.global.js"
    crossOrigin="anonymous"
    strategy="beforeInteractive"
  />
);
