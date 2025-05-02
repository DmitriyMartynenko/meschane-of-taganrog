import { z } from 'zod';

export const OrderSchema = z.object({
  phone: z
    .string()
    .nonempty({ message: 'Телефон обязателен' })
    .refine((value) => {
        const digits = value.replace(/\D/g, '');
        return /^7\d{10}$/.test(digits);
      },
      { message: 'Введите номер в формате: +7 (123) 456 78 90' }
    )
});
