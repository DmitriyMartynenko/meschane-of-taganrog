import { type JSX } from 'react';
import { type ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';

import { FilterFormSchema } from './filter-form.schemas';

export type FilterForm = z.infer<typeof FilterFormSchema>;

type FormFieldName = keyof FilterForm;

type FilterSelectOptionValue = string;

type FilterSelectOption = {
  value: FilterSelectOptionValue;
  label: string;
};

export type FilterSelect = {
  name: FormFieldName;
  label: string;
  placeholder: string;
  options?: FilterSelectOption[];
  groupLabel?: string;
  CustomSelect?: (props: CustomFilterSelectProps) => JSX.Element;
};

export type FilterSelectProps = {
  config: Omit<FilterSelect, 'name' | 'label'>;
  formField: ControllerRenderProps<FilterForm>;
};

export type CustomFilterSelectProps = {
  config?: Omit<FilterSelect, 'name' | 'label'>;
  formField: ControllerRenderProps<FilterForm, FormFieldName>;
};

export const isFilterActive = (value: FilterSelectOptionValue): value is string => {
  return value !== undefined && value !== null && value !== '';
};
