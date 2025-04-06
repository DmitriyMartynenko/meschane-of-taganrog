import React from 'react';

interface TourCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export const TourCard = ({ title, description, imageUrl, date }: TourCardProps) => {
  return (
    <div className="overflow-hidden rounded border shadow-sm transition-shadow duration-200 hover:shadow-md">
      <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500">Дата: {date}</p>
      </div>
    </div>
  );
};
