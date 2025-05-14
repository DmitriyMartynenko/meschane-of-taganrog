import { Prisma } from '@prisma/client';

import { type ErrorResponse } from '../../api/createBooking';
import { type UniqueField } from '../../model/types';

const uniqueFieldMessages: Record<UniqueField, string> = {
  phone: 'Пользователь с таким телефоном уже оставил заявку',
  email: 'Пользователь с таким e-mail уже оставил заявку',
};

const isUniqueField = (field: unknown): field is UniqueField => {
  return typeof field === 'string' && field in uniqueFieldMessages;
};

const getUniqueField = (target: unknown) => {
  return Array.isArray(target) ? target.join('') : undefined;
};

export const mapPrismaError = (error: unknown): ErrorResponse => {
  if (!(error instanceof Prisma.PrismaClientKnownRequestError))
    return { ok: false, message: 'Неизвестная ошибка' };

  if (error.code === 'P2002') {
    const target = error.meta?.target;
    const field = getUniqueField(target);

    if (isUniqueField(field)) {
      return {
        ok: false,
        field,
        message: uniqueFieldMessages[field],
      };
    }
  }

  return { ok: false, message: `PrismaClient: ${error.code}` };
};
