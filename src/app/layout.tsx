import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { APP_NAME, APP_DESCRIPTION, APP_KEYWORDS } from '@/shared/constants/seo-constants';
import { montserrat, alegreya, chibola } from '@/shared/config/fonts';

import './styles/globals.css';

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
