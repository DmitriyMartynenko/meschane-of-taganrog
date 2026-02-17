'use server';

import { prisma } from '@/prisma/prisma-client';

import { mapPrismaError } from '../lib/map-prisma-error';
import { type BookingForm, type UniqueField } from '../model/booking-form.types';

type SuccessResponse = {
  ok: true;
};

export type ErrorResponse = {
  ok: boolean;
  field?: UniqueField;
  message: string;
};

export type CreateBookingResponse = SuccessResponse | ErrorResponse;

export const createBooking = async (data: BookingForm): Promise<CreateBookingResponse> => {
  const { name, phone, email } = data;
  console.log('test');
  try {
    await prisma.booking.create({
      data: {
        user: {
          create: {
            name,
            phone,
            email,
          },
        },
      },
    });
    return {
      ok: true,
    };
  } catch (error: unknown) {
    return mapPrismaError(error);
  }
};
