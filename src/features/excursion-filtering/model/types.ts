import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';

import { FilterFormSchema } from './schemas';

type FormFieldName = keyof FilterForm;

type FilterSelectOption = {
  value: string;
  label: string;
};

export type FilterSelect = {
  name: FormFieldName;
  label: string;
  placeholder: string;
  options?: FilterSelectOption[];
  groupLabel?: string;
  CustomSelect?: FC<CustomFilterSelectProps>;
};

export type FilterForm = z.infer<typeof FilterFormSchema>;

export type FilterSelectProps = {
  config: Omit<FilterSelect, 'name' | 'label'>;
  formField: ControllerRenderProps<FilterForm>;
};

export type CustomFilterSelectProps<T extends FormFieldName = any> = {
  formField: ControllerRenderProps<FilterForm, T>;
};
