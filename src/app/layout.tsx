import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { montserrat, alegreya, chibola } from '@/app/assets/fonts/fonts';
import { APP_NAME, APP_DESCRIPTION, APP_KEYWORDS } from '@/shared/constants/seo-constants';

import './assets/styles/globals.css';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  applicationName: APP_NAME,
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: Readonly<RootLayoutProps>) => {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${alegreya.variable} ${chibola.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
