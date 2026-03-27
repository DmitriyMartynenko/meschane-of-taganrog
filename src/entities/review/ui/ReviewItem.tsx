'use client';

import { CircleUserRound } from 'lucide-react';

import { cn } from '@/shared/lib';
import { Avatar, AvatarFallback, AvatarImage, Quotes, StarRating } from '@/shared/ui';

import { type ReviewItem as ReviewType } from '../model/review.types';

type ReviewProps = {
  className?: string;
} & ReviewType;

export const ReviewItem = (props: ReviewProps) => {
  const { className, text = 'Нет текста', author, rating = 5 } = props;
  const { fullName = 'Анонимный пользователь', avatarUrl = '', jobTitle = '' } = author;

  return (
    <div className="py-12 lg:py-16">
      <div
        className={cn(
          'relative flex flex-col items-center justify-center gap-6 bg-background-primary px-6 pt-16 pb-10 text-center shadow lg:px-16 lg:pt-24 lg:pb-16 2xl:gap-8',
          className
        )}
      >
        <div className="absolute top-0 left-1/2 z-1 h-24 w-24 -translate-1/2 rounded-full border-8 border-transparent bg-background-secondary lg:h-32 lg:w-32 lg:border-10">
          <Avatar className="size-full select-none">
            <AvatarImage src={avatarUrl} alt={fullName} />
            <AvatarFallback>
              <CircleUserRound className="size-full" />
            </AvatarFallback>
          </Avatar>
        </div>
        <Quotes className="absolute -bottom-8 left-4 text-[75px] lg:-bottom-10.5 lg:left-8 lg:text-[100px]" />
        <Quotes
          className="absolute top-1 right-4 text-[75px] lg:top-3 lg:right-8 lg:text-[100px]"
          side="left"
        />
        <p className="text-sm leading-relaxed tracking-wide lg:text-base">{text}</p>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-sm lg:text-base">{fullName || 'Анонимный пользователь'}</span>
          {jobTitle && (
            <span className="-mt-1 text-sm text-muted-primary lg:text-base">{jobTitle}</span>
          )}
          <StarRating className="[&_svg]:size-4 lg:[&_svg]:size-6" rating={rating} />
        </div>
      </div>
    </div>
  );
};
