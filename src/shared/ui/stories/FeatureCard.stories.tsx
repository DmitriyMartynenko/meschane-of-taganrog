import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FeatureCard } from '../elements/FeatureCard';

import Book from 'src/app-pages/home/assets/icons/book.svg';
import Briefcase from 'src/app-pages/home/assets/icons/briefcase.svg';
import Chessknight from 'src/app-pages/home/assets/icons/chessknight.svg';
import Clock from 'src/app-pages/home/assets/icons/clock.svg';

const meta: Meta<typeof FeatureCard> = {
  title: 'shared/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text', description: 'Путь к иконке для Image' },
    iconAlt: { control: 'text', description: 'Альтернативный текст иконки' },
    text: { control: 'text', description: 'Текст карточки' },
    className: { control: 'text', description: 'Дополнительные классы Tailwind' },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    icon: Book,
    iconAlt: 'Звезда',
    text: 'Преимущество №1: удобство и комфорт для пользователей',
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-4">
      <FeatureCard icon={Briefcase} iconAlt="Звезда" text="Преимущество №1: удобство и комфорт" />
      <FeatureCard icon={Clock} iconAlt="Щит" text="Преимущество №2: безопасность данных" />
      <FeatureCard
        icon={Chessknight}
        iconAlt="Ракета"
        text="Преимущество №3: высокая скорость работы"
      />
    </div>
  ),
};
