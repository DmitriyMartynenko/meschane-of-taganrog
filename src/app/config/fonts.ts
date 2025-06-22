import { Alegreya, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['cyrillic', 'latin'],
  variable: '--montserrat',
});

export const alegreya = Alegreya({
  display: 'swap',
  subsets: ['cyrillic', 'latin'],
  variable: '--alegreya',
});

export const chibola = localFont({
  src: '../assets/fonts/chilbola/Chibola.ttf',
  display: 'swap',
  variable: '--chibola',
});
