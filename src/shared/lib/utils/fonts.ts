import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const chibola = localFont({
  src: '../../assets/fonts/chilbola/Chibola.ttf',
  display: 'swap',
  variable: '--font-chibola'
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
