import { dirname } from 'path';
import { fileURLToPath } from 'url';

import storybook from 'eslint-plugin-storybook';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {},
  },
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;
