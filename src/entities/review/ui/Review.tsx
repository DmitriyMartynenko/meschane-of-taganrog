'use client';

import Image from 'next/image';
import { CircleUserRound } from 'lucide-react';

import { useImageFallback } from '@/shared/lib/hooks/useImageFallback';
import type { User } from '@/shared/types/user';

import { cn } from '@/shared/lib/utils/cn';

import quotes from '@/shared/assets/icons/quotes.svg';

type ReviewProps = {
  className?: string;
  author: User;
  text?: string;
  rating: number;
};

export const Review = (props: ReviewProps) => {
  const { className = '', text = '', author, rating } = props;

  const { fullName, avatarUrl, role } = author;

  const { showFallback, handleError } = useImageFallback(avatarUrl);

  return (
    <div
      className={cn(
        'relative flex flex-col justify-center items-center gap-8 max-w-[850px] pt-24 px-16 pb-16 text-center bg-amber-300',
        className
      )}
    >
      <div className="absolute top-0 left-[50%] transform -translate-[50%] w-32 h-32 border-10 border-background-primary rounded-full z-1">
        {showFallback ? (
          <CircleUserRound size={64} />
        ) : (
          <Image
            className="rounded-full"
            src={avatarUrl}
            alt={fullName}
            onError={handleError}
            fill
          />
        )}
      </div>
      <div className="absolute top-[90%] left-[5%] w-12 h-12">
        <Image src={quotes} alt="Кавычки" fill />
      </div>
      <div className="absolute -top-[5%] left-[90%] w-12 h-12 transform rotate-180">
        <Image src={quotes} alt="Кавычки" fill />
      </div>
      <p>{text || 'Нет текста'}</p>
      <div className="flex flex-col gap-4">
        <span>{fullName}</span>
        <span>{role}</span>
        <span>{rating}</span>
      </div>
    </div>
  );
};
