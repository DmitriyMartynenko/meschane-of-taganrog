import Link from 'next/link';

import { cn } from '@/shared/lib';

type NoExcursionsPlaceholderProps = {
  className?: string;
};

export const NoExcursionsPlaceholder = (props: NoExcursionsPlaceholderProps) => {
  const { className } = props;

  return (
    <div className={cn('flex flex-col items-center justify-center gap-4 text-center', className)}>
      <h3 className="text-2xl font-bold text-foreground-primary">
        Подходящих Вам экскурсий не найдено.
      </h3>
      <p className="max-w-md leading-relaxed text-foreground-primary">
        Мы работаем над созданием незабываемых экскурсий для Вас. Следите за обновлениями или
        свяжитесь с нами для получения персональных рекомендаций по{' '}
        <Link className="text-primary underline" href="#quick-order-section">
          форме
        </Link>{' '}
        ниже.
      </p>
    </div>
  );
};
