import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib';
import { Button, Spinner } from '@/shared/ui';

type MapFrameProps = {
  className?: string;
};

export const MapFrame = (props: MapFrameProps) => {
  const { className } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const softLoadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const errorTimeout = setTimeout(() => {
      if (isLoading) {
        setIsError(true);
        setIsLoading(false);
      }
    }, 15000);

    return () => {
      clearTimeout(softLoadTimeout);
      clearTimeout(errorTimeout);
    };
  }, [isLoading]);

  return (
    <div className={cn('relative size-full', className)}>
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Spinner />
            <span className="tracking-widest text-secondary/40">Загрузка карты...</span>
          </div>
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 text-center">
          <span className="tracking-widest text-secondary/40">Не удалось загрузить карту</span>
          <Button className="p-0 text-sm normal-case underline" lightText variant="ghost">
            <Link href="" target="_blank" rel="noopener noreferrer">
              Открыть на Яндекс.Картах
            </Link>
          </Button>
        </div>
      )}
      <iframe
        className={cn(
          'size-full transition-all duration-600 ease-in-out select-none',
          isLoading || isError ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
        )}
        src="https://yandex.ru/map-widget/v1/-/CDxqq6LW"
        title="Карта – Таганрогский музей-заповедник"
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </div>
  );
};
