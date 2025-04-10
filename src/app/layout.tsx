import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { APP_NAME, APP_DESCRIPTION, APP_KEYWORDS } from '@/shared/lib/constants/seo-constants';
import { chibola, montserrat } from '@/shared/lib/utils/fonts';

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

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${chibola.variable} antialiased`}>
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
