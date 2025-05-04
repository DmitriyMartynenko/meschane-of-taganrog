import { z } from 'zod';

export const PhoneField = z
  .string()
  .nonempty({ message: 'Телефон обязателен' })
  .trim()
  .toLowerCase()
  .refine(
    (value) => {
      const digits = value.replace(/\D/g, '');
      return /^7\d{10}$/.test(digits);
    },
    { message: 'Введите номер в формате: +7 (123) 456 78 90' }
  );

export const EmailField = z
  .string()
  .nonempty({ message: 'E-mail обязателен' })
  .trim()
  .toLowerCase()
  .max(320, { message: 'E‑mail не должен быть длиннее 320 символов' })
  .email({ message: 'Введите корректный адрес, например name@example.com' })
  .refine((val) => /\.(ru|com|org|net|io)$/.test(val), {
    message: 'Доступны домены .ru, .com, .org, .net или .io',
  });
