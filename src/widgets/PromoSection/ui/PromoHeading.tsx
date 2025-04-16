import { SectionHeadingHighlight } from '@/shared/ui/elements/SectionHeading';

export const PromoHeading = () => {
  return (
    <h1
      className={`font-chibola font-extrabold text-5xl/tight text-foreground-secondary text-shadow-promo-title`}
    >
      <SectionHeadingHighlight className="text-[4rem]">Мещанский Таганрог:</SectionHeadingHighlight>
      <br />
      Иммерсивные экскурсии
    </h1>
  );
};
