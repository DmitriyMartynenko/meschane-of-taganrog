'use client';

import { CircleUserRound } from 'lucide-react';

import { cn } from '@/shared/lib';
import { Avatar, AvatarFallback, AvatarImage, Quotes, StarRating } from '@/shared/ui';

import { type ReviewItem as ReviewType } from '../model/review.types';

type ReviewProps = {
  className?: string;
} & ReviewType;

export const ReviewItem = (props: ReviewProps) => {
  const { className = '', text = 'Нет текста', author, rating = 5 } = props;

  const { fullName = 'Анонимный пользователь', avatarUrl = '', jobTitle = '' } = author;

  return (
    <div className="py-16">
      <div
        className={cn(
          'relative flex flex-col items-center justify-center gap-8 bg-background-primary px-16 pt-24 pb-16 text-center shadow',
          className
        )}
      >
        <div className="absolute top-0 left-1/2 z-1 h-32 w-32 -translate-1/2 rounded-full border-10 border-transparent bg-background-secondary">
          <Avatar className="size-full">
            <AvatarImage src={avatarUrl} alt={fullName}></AvatarImage>
            <AvatarFallback>
              <CircleUserRound className="size-full" />
            </AvatarFallback>
          </Avatar>
        </div>
        <Quotes className="absolute -bottom-10.5 left-8 text-[100px]" />
        <Quotes className="absolute top-3 right-8 text-[100px]" side="left" />
        <p>{text}</p>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-medium uppercase">{fullName || 'Анонимный пользователь'}</span>
          {jobTitle && <span className="text-muted-primary italic">{jobTitle}</span>}
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};
