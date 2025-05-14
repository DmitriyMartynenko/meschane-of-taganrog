'use server';

import { prisma } from '@/shared/lib';

import { mapPrismaError } from '../lib/utils/mapPrismaError';
import { type BookingForm, type UniqueField } from '../model/types';

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
