'use client';

import { MoveRight } from 'lucide-react';

import { SECTION_IDS } from '@/shared/model';
import { Button, Form, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui';

import { FILTER_CONTROLS } from '../model/filter-controls.constants';
import { type FilterForm as FilterFormData } from '../model/filter.types';
import { useFilterForm } from '../model/use-filter-form';

import { FilterSelect } from './FilterSelect';

export const FilterForm = () => {
  const { form, onSubmit } = useFilterForm();
  const { control, handleSubmit } = form;

  const handleFormSubmit = handleSubmit((data: FilterFormData) => {
    onSubmit(data);

    document
      .getElementById(SECTION_IDS.EXCURSIONS_EXCURSIONS_LIST)
      ?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <Form {...form}>
      <form className="flex flex-col items-center justify-center gap-8" onSubmit={handleFormSubmit}>
        <div className="flex w-full flex-col justify-center gap-4 lg:flex-row">
          {FILTER_CONTROLS.map(({ name, label, CustomSelect, ...config }) => (
            <FormField
              control={control}
              key={name}
              name={name}
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-2">
                  <FormLabel className="tracking-widest text-secondary normal-case">
                    {label}
                  </FormLabel>
                  {CustomSelect ? (
                    <CustomSelect config={config} formField={field} />
                  ) : (
                    <FilterSelect config={config} formField={field} />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button className="group w-full gap-2.5" type="submit" variant="primary" lightText>
          Найти экскурсии{' '}
          <MoveRight
            className="size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
            strokeWidth={2}
          />
        </Button>
      </form>
    </Form>
  );
};
