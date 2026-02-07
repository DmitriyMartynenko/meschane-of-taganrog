import { SECTION_IDS } from '@/shared/model';
import {
  Container,
  FeatureCard,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
} from '@/shared/ui';

import Book from '../assets/icons/book.svg';
import Briefcase from '../assets/icons/briefcase.svg';
import Chessknight from '../assets/icons/chessknight.svg';
import Clock from '../assets/icons/clock.svg';

const FEATURE_CARDS = [
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
    text: 'Блесните своими знаниями в кругу друзей или в школе',
  },
];

export const FeaturesSection = () => {
  return (
    <Section className="bg-background-primary" id={SECTION_IDS.HOME_FEATURES}>
      <Container className="flex flex-col items-center justify-center gap-16 pt-16 pb-32">
        <Heading>
          <HeadingSubtitle>Почему стоит попробовать</HeadingSubtitle>
          <HeadingTitle>
            <HeadingHighlight>Иммерсивные</HeadingHighlight> экскурсии
          </HeadingTitle>
        </Heading>
        <div className="flex gap-6">
          {FEATURE_CARDS.map((card) => (
            <FeatureCard
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
