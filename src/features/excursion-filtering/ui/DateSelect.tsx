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
        <SelectTrigger className="w-full border-0 border-b border-secondary/25 px-0 text-base tracking-wide text-foreground-secondary transition-colors duration-300 ease-in-out hover:border-secondary/50 focus:border-ring-primary focus:ring-0 data-placeholder:text-muted-primary/80">
          <SelectValue placeholder="Выберите дату">
            {!isFilterActive(formField.value) ? anyOption?.label : formattedDate}
          </SelectValue>
        </SelectTrigger>
      </FormControl>
      <SelectContent className="rounded-none border-primary/25 bg-[rgba(30,20,10,0.97)] backdrop-blur-md">
        {anyOption && (
          <>
            <SelectItem
              className="text-base tracking-wide text-muted-primary focus:bg-primary/25 focus:text-accent-primary"
              value={anyOption.value}
            >
              {anyOption.label}
            </SelectItem>
            <SelectSeparator className="bg-primary/25" />
          </>
        )}
        <Calendar
          className="w-full bg-transparent"
          classNames={{
            today: 'bg-secondary/25',
            weekday: 'text-muted-primary text-base',
            caption_label: 'text-foreground-secondary text-base',
            day_button: 'text-foreground-secondary text-base',
            button_next: 'text-foreground-secondary size-8',
            button_previous: 'text-foreground-secondary size-8',
          }}
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
