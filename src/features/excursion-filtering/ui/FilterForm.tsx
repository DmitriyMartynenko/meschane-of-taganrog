import { Button, Form, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui';

import { useFilterForm } from '../lib/hooks/useFilterForm';
import { FILTER_CONTROLS } from '../model/constants';

import { FilterSelect } from './FilterSelect';

export const FilterForm = () => {
  const { form, onSubmit, onReset } = useFilterForm();
  const { date, theme, duration } = form.getValues();

  const hasActiveFilters = Boolean(date || theme || duration);

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-8 border border-border-primary p-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex gap-4">
          {FILTER_CONTROLS.map(({ name, label, CustomSelect, ...config }) => (
            <FormField
              control={form.control}
              key={name}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground-primary normal-case">{label}</FormLabel>
                  {CustomSelect ? (
                    <CustomSelect formField={field} />
                  ) : (
                    <FilterSelect config={config} formField={field} />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Button type="submit" variant="outline">
            Найти экскурсии
          </Button>
          <Button
            type="button"
            textWhite
            variant="destructive"
            size="sm"
            disabled={!hasActiveFilters}
            onClick={onReset}
          >
            Сбросить
          </Button>
        </div>
      </form>
    </Form>
  );
};
