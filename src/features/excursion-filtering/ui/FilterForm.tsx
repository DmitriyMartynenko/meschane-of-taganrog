'use client';

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

    document.getElementById('excursions-section')?.scrollIntoView();
  });

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-8 border border-border-primary p-6"
        onSubmit={handleFormSubmit}
      >
        <div className="flex gap-4">
          {FILTER_CONTROLS.map(({ name, label, CustomSelect, ...config }) => (
            <FormField
              control={control}
              key={name}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground-primary normal-case">{label}</FormLabel>
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
        <Button type="submit" variant="outline">
          Найти экскурсии
        </Button>
      </form>
    </Form>
  );
};
