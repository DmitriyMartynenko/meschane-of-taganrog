import Link from 'next/link';

export const NoExcursionsPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-8 text-center">
      <h3 className="text-text-primary text-2xl font-bold">Подходящих Вам экскурсий не найдено.</h3>
      <p className="text-text-secondary max-w-md leading-relaxed">
        Мы работаем над созданием незабываемых экскурсий для Вас. Следите за обновлениями или
        свяжитесь с нами для получения персональных рекомендаций по{' '}
        <Link className="text-secondary underline" href="#quick-order-section">
          форме
        </Link>{' '}
        ниже.
      </p>
    </div>
  );
};
