'use client';

import Link from 'next/link';

import { NavLink } from '@/widgets/header';

import { cn, fadeIn, fadeLeft, fadeUp, staggerContainer, viewport } from '@/shared/lib';
import { PAGES, SECTION_IDS } from '@/shared/model';
import {
  BackgroundImage,
  Button,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  MotionDiv,
  MotionP,
} from '@/shared/ui';

import footerBackground from '../assets/footer-background.png';

import { MapFrame } from './MapFrame';

const CONTACTS = [
  {
    label: 'Телефон',
    value: '(8634) 61-14-66',
    href: 'tel:+78634611466',
  },
  {
    label: 'Адрес',
    value: 'г. Таганрог, ул. Октябрьская, 9',
    href: 'https://yandex.ru/maps/-/CDxqq6LW',
  },
  {
    label: 'Почта',
    value: 'tgliamz.muzei@yandex.ru',
    href: 'mailto:tgliamz.muzei@yandex.ru',
  },
];

const WORKING_HOURS = [
  { days: 'Вт – Вс', hours: '10:00 – 18:00' },
  { days: 'Пн', hours: 'Выходной' },
];

export const Footer = () => {
  return (
    <footer className="flex" id={SECTION_IDS.SHARED_CONTACTS}>
      <MotionDiv
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative hidden basis-1/2 overflow-hidden lg:block"
      >
        <MapFrame />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(30,20,10,0.3)]" />
      </MotionDiv>
      <div className="relative flex w-full flex-col lg:basis-1/2">
        <BackgroundImage src={footerBackground} />
        <MotionDiv
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative flex flex-1 flex-col gap-6 p-12 px-6 lg:gap-8 lg:p-16"
        >
          <MotionDiv variants={fadeLeft}>
            <Heading className="items-center lg:items-start" variant="light">
              <HeadingSubtitle withDash>На связи с нами</HeadingSubtitle>
              <HeadingTitle className="text-center lg:text-start">
                <HeadingHighlight>Контактная</HeadingHighlight> информация
              </HeadingTitle>
            </Heading>
          </MotionDiv>
          <MotionDiv variants={fadeUp} className="flex flex-col">
            {CONTACTS.map(({ label, value, href }, i) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'group flex flex-col gap-1.5 border-b border-border-primary/10 py-1.5 text-center lg:gap-2 lg:py-2 lg:text-start',
                  i === 0 && 'border-t border-border-primary/10'
                )}
              >
                <span className="text-[12px] tracking-[0.2em] text-secondary/80 uppercase">
                  {label}
                </span>
                <span className="text-foreground-secondary transition-colors duration-300 ease-in-out group-hover:text-accent-primary">
                  {value}
                </span>
              </Link>
            ))}
          </MotionDiv>
          <MotionDiv
            variants={fadeUp}
            className="flex flex-col items-center gap-6 lg:flex-row lg:items-start xl:gap-8"
          >
            <div className="flex w-full max-w-50 shrink-0 grow flex-col gap-1.5 lg:gap-2">
              <span className="text-center text-[12px] tracking-[0.2em] text-secondary/80 uppercase lg:text-start">
                Режим работы
              </span>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                {WORKING_HOURS.map(({ days, hours }) => (
                  <div key={days} className="flex items-baseline gap-3 text-foreground-secondary">
                    <span>{days}</span>
                    <span className="h-px flex-1 bg-border-primary/20" />
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <MapFrame className="h-75 bg-[rgb(30,20,10)] lg:hidden" />
            <div className="hidden h-full w-px bg-border-primary/10 lg:block" />
            <MotionP
              variants={fadeIn}
              className="max-w-md text-center font-alegreya text-lg leading-relaxed tracking-wide text-muted-primary italic lg:self-center lg:text-start lg:text-xl"
            >
              Сохраняем память о людях, которые построили Таганрог таким, каким мы его знаем.
            </MotionP>
          </MotionDiv>
          <div className="h-px w-full bg-border-primary/10" />
          <MotionDiv
            variants={fadeIn}
            className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-4"
          >
            <div className="flex gap-6">
              <Button className="p-0 text-xs tracking-[0.2em] text-secondary/40" variant="ghost">
                <NavLink href={`/#${SECTION_IDS.HOME_PROMO}`}>Главная</NavLink>
              </Button>
              <Button className="p-0 text-xs tracking-[0.2em] text-secondary/40" variant="ghost">
                <NavLink href={`${PAGES.EXCURSIONS}`}>Экскурсии</NavLink>
              </Button>
              <Button className="p-0 text-xs tracking-[0.2em] text-secondary/40" variant="ghost">
                <Link href="https://tgliamz.ru/" target="_blank" rel="noopener noreferrer">
                  ТГЛИАМЗ
                </Link>
              </Button>
            </div>
            <span className="text-xs tracking-[0.2em] text-secondary/40 uppercase">
              © {new Date().getFullYear()} Мещане Таганрога
            </span>
          </MotionDiv>
        </MotionDiv>
      </div>
    </footer>
  );
};
