import { InlineConsultationForm } from '@/features/consultation';
import { Heading, HeadingHighlight, HeadingSubtitle, HeadingTitle } from '@/shared/ui';

import footerBackground from '../assets/footer-background.png';

export const Footer = () => {
  return (
    <footer className="flex" id="footer">
      <div className="basis-1/2">
        <iframe className="w-full h-full" src="https://yandex.ru/map-widget/v1/-/CDxqq6LW"></iframe>
      </div>
      <div
        className="flex flex-col basis-1/2 gap-16 p-16 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
            url(${footerBackground.src})
          `,
        }}
      >
        <Heading>
          <HeadingSubtitle>На связи с нами</HeadingSubtitle>
          <HeadingTitle className="text-foreground-secondary">
            <HeadingHighlight className="text-primary">Контактная</HeadingHighlight> информация
          </HeadingTitle>
        </Heading>
        <div className="flex flex-wrap gap-x-16 gap-y-4 text-foreground-secondary uppercase">
          <p>
            Телефон: <span className="text-primary">(8634) 61-14-66</span>
          </p>
          <p>
            Адрес:
            <span className="text-primary"> г. Таганрог, ул. Октябрьская, 9</span>
          </p>
          <p>
            e-mail:
            <span className="text-primary"> tgliamz.muzei@yandex.ru</span>
          </p>
        </div>
        <InlineConsultationForm />
      </div>
    </footer>
  );
};
