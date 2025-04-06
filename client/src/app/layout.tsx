import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Мещане Таганрога',
  description: 'Иммерсивные экскурсии',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
