import {
  BenefitCard,
  Container,
  SectionHeading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
} from '@/shared/ui';

import Book from '../assets/icons/book.svg';
import Briefcase from '../assets/icons/briefcase.svg';
import Chessknight from '../assets/icons/chessknight.svg';
import Clock from '../assets/icons/clock.svg';

const BENEFIT_CARDS = [
  {
    id: '1',
    icon: Clock,
    iconAlt: 'Часы',
    text: 'Погрузитесь в мещанский мир конца XIX-XX веков и узнайте, как жил Таганрог более 100 лет назад',
  },
  {
    id: '2',
    icon: Briefcase,
    iconAlt: 'Портфель',
    text: 'Получите уникальную научную информацию о жителях города прошлых веков',
  },
  {
    id: '3',
    icon: Chessknight,
    iconAlt: 'Фигуря коня',
    text: 'Проведите необычно свой досуг',
  },
  {
    id: '4',
    icon: Book,
    iconAlt: 'Книга',
    text: 'Блестните своими знаниями в кругу друзей или в школе',
  },
];

export const BenefitsSection = () => {
  return (
    <Section id="benefits-section">
      <Container className="flex-col gap-16 pt-16 pb-32">
        <SectionHeading>
          <HeadingSubtitle>Почему стоит попробовать</HeadingSubtitle>
          <HeadingTitle>
            Иммер<HeadingHighlight>с</HeadingHighlight>ивные эк
            <HeadingHighlight>с</HeadingHighlight>кур
            <HeadingHighlight>с</HeadingHighlight>ии
          </HeadingTitle>
        </SectionHeading>
        <div className="flex gap-6">
          {BENEFIT_CARDS.map((card) => (
            <BenefitCard
              className="basis-1/4"
              key={card.id}
              icon={card.icon}
              iconAlt={card.iconAlt}
              text={card.text}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
