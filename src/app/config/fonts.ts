import { Montserrat, Alegreya } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  display: 'swap',
  variable: '--montserrat',
});

export const alegreya = Alegreya({
  display: 'swap',
  variable: '--alegreya'
})

export const chibola = localFont({
  src: '../assets/fonts/chilbola/Chibola.ttf',
  display: 'swap',
  variable: '--chibola',
});
