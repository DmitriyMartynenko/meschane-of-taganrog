import { formatDate } from '@/shared/lib';
import {
  Calendar,
  FormControl,
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';

import { CustomFilterSelectProps, isFilterActive } from '../model/filter.types';

export const DateSelect = (props: CustomFilterSelectProps) => {
  const { formField, config } = props;

  const formattedDate = isFilterActive(formField.value) ? formatDate(formField.value, false) : '';
  const selectedDate = isFilterActive(formField.value) ? new Date(formField.value) : undefined;

  const anyOption = config?.options?.find((option) => !isFilterActive(option.value));

  const onAnySelect = (value: string) => {
    if (value === anyOption?.value) formField.onChange(value);
  };

  const onDateSelect = (date: Date) => {
    formField.onChange(date.toISOString());
  };

  return (
    <Select onValueChange={onAnySelect} value={formField.value}>
      <FormControl>
        <SelectTrigger className="w-70">
          <SelectValue placeholder="Выберите дату">
            {!isFilterActive(formField.value) ? anyOption?.label : formattedDate}
          </SelectValue>
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {anyOption && (
          <>
            <SelectItem className="justify-center" value={anyOption.value}>
              {anyOption.label}
            </SelectItem>
            <SelectSeparator />
          </>
        )}
        <Calendar
          className="w-full"
          mode="single"
          required
          selected={selectedDate}
          onSelect={onDateSelect}
          disabled={(date) => date < new Date()}
        />
      </SelectContent>
    </Select>
  );
};
