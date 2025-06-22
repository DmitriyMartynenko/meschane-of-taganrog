'use client';

import Image from 'next/image';
import { CircleUserRound } from 'lucide-react';

import { Quotes } from '@/shared/assets';
import { cn } from '@/shared/lib';
import { Avatar, AvatarFallback, AvatarImage, StarRating } from '@/shared/ui';

import { type Review as ReviewType } from '../model/types';

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
          'relative flex flex-col items-center justify-center gap-8 bg-background-primary px-16 pt-24 pb-16 text-center shadow',
          className
        )}
      >
        <div className="absolute top-0 left-1/2 z-1 h-32 w-32 -translate-1/2 rounded-full border-10 border-background-secondary bg-background-secondary">
          <Avatar className="size-full">
            <AvatarImage src={avatarUrl} alt={fullName}></AvatarImage>
            <AvatarFallback>
              <CircleUserRound className="size-full" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="absolute top-[90%] left-[5%] h-12 w-12">
          <Image src={Quotes} alt="Кавычки" className="size-full" />
        </div>
        <div className="absolute -top-[5%] left-[90%] h-12 w-12 rotate-180 transform">
          <Image src={Quotes} alt="Кавычки" className="size-full" />
        </div>
        <p className="italic">{text}</p>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-medium uppercase">{fullName || 'Анонимный пользователь'}</span>
          {jobTitle && <span className="text-foreground-muted">{jobTitle}</span>}
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};
