'use client';

import Image from 'next/image';
import { CircleUserRound } from 'lucide-react';

import { StarRating } from '@/shared/ui/elements/StarRating';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/common/Avatar';

import type { Review as ReviewType } from '../model/types';

import { cn } from '@/shared/lib/utils/cn';

import quotes from '@/shared/assets/icons/quotes.svg';

type ReviewProps = {
  className?: string;
} & ReviewType;

export const Review = (props: ReviewProps) => {
  const { className = '', text = 'Нет текста', author, rating = 5 } = props;

  const { fullName = 'Анонимный пользователь', avatarUrl = '', jobTitle = '' } = author;

  return (
    <div className="py-16">
      <div
        className={cn(
          'relative flex flex-col justify-center items-center gap-8 pt-24 px-16 pb-16 text-center bg-background-primary shadow',
          className
        )}
      >
        <div className="absolute top-0 left-1/2 -translate-1/2 w-32 h-32 border-10 border-background-secondary rounded-full bg-background-secondary z-1">
          <Avatar className="size-full">
            <AvatarImage src={avatarUrl} alt={fullName}></AvatarImage>
            <AvatarFallback>
              <CircleUserRound className="size-full" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="absolute top-[90%] left-[5%] w-12 h-12">
          <Image src={quotes} alt="Кавычки" fill />
        </div>
        <div className="absolute -top-[5%] left-[90%] w-12 h-12 transform rotate-180">
          <Image src={quotes} alt="Кавычки" fill />
        </div>
        <p className="italic">{text}</p>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="font-medium uppercase">{fullName}</span>
          {jobTitle && <span className="text-foreground-muted">{jobTitle}</span>}
          <StarRating rating={rating} className="flex gap-1" />
        </div>
      </div>
    </div>
  );
};
