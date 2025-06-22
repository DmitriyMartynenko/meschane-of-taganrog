import { InlineConsultationForm } from '@/features/consultation';
import { HeadingHighlight, HeadingSubtitle, HeadingTitle, SectionHeading } from '@/shared/ui';

import footerBackground from '../assets/footer-background.png';

export const Footer = () => {
  return (
    <footer className="flex" id="footer">
      <div className="basis-1/2">
        <iframe className="h-full w-full" src="https://yandex.ru/map-widget/v1/-/CDxqq6LW"></iframe>
      </div>
      <div
        className="flex basis-1/2 flex-col gap-12 bg-cover bg-center bg-no-repeat p-16"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
            url(${footerBackground.src})
          `,
        }}
      >
        <SectionHeading>
          <HeadingSubtitle withDash>На связи с нами</HeadingSubtitle>
          <HeadingTitle className="text-foreground-secondary">
            <HeadingHighlight className="text-primary">Контактная</HeadingHighlight> информация
          </HeadingTitle>
        </SectionHeading>
        <div className="flex flex-wrap gap-x-8 gap-y-4 font-semibold text-foreground-secondary uppercase">
          <p>
            Телефон: <span className="font-light text-primary">(8634) 61-14-66</span>
          </p>
          <p>
            Адрес:
            <span className="font-light text-primary"> г. Таганрог, ул. Октябрьская, 9</span>
          </p>
          <p>
            e-mail:
            <span className="font-light text-primary"> tgliamz.muzei@yandex.ru</span>
          </p>
        </div>
        <InlineConsultationForm />
      </div>
    </footer>
  );
};
