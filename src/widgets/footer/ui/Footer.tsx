import { InlineConsultationForm } from '@/features/consultation';

import { SECTION_IDS } from '@/shared/model';
import {
  BackgroundImage,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
} from '@/shared/ui';

import footerBackground from '../assets/footer-background.png';

export const Footer = () => {
  return (
    <footer className="flex" id={SECTION_IDS.SHARED_CONTACTS}>
      <div className="basis-1/2">
        <iframe className="h-full w-full" src="https://yandex.ru/map-widget/v1/-/CDxqq6LW"></iframe>
      </div>
      <div className="relative flex basis-1/2">
        <BackgroundImage src={footerBackground} />
        <div className="relative flex flex-col gap-12 p-16">
          <Heading variant="light">
            <HeadingSubtitle withDash>На связи с нами</HeadingSubtitle>
            <HeadingTitle>
              <HeadingHighlight>Контактная</HeadingHighlight> информация
            </HeadingTitle>
          </Heading>
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-semibold text-foreground-secondary uppercase">
            <p>
              Телефон: <span className="font-normal text-secondary">(8634) 61-14-66</span>
            </p>
            <p>
              Адрес:
              <span className="font-normal text-secondary"> г. Таганрог, ул. Октябрьская, 9</span>
            </p>
            <p className="w-full">
              почта:
              <span className="font-normal text-secondary"> tgliamz.muzei@yandex.ru</span>
            </p>
          </div>
          <InlineConsultationForm />
        </div>
      </div>
    </footer>
  );
};
