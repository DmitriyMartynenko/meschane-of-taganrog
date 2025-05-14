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
  .max(50, { message: 'E‑mail не должен быть длиннее 50-ти символов' })
  .email({ message: 'Введите корректный адрес, например name@example.com' })
  .refine((val) => /\.(ru|com|org|net|io)$/.test(val), {
    message: 'Доступны домены .ru, .com, .org, .net или .io',
  });

export const NameField = z
  .string()
  .nonempty({ message: 'Имя обязательно' })
  .trim()
  .toLowerCase()
  .min(2, { message: 'Слишком коротко' }) // защитимся от "А А"
  .max(50, { message: 'Слишком длинное имя' })
  .refine((value) => /^\p{L}+ \p{L}+$/u.test(value), {
    message: 'Введите имя и фамилию через пробел, без цифр и знаков',
  });
