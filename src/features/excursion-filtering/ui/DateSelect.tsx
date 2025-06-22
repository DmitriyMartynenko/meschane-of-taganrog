import { formatDate } from '@/shared/lib';
import {
  Calendar,
  FormControl,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';

import { CustomFilterSelectProps } from '../model/types';

export const DateSelect = (props: CustomFilterSelectProps<'date'>) => {
  const { formField } = props;

  const formattedDate = formField.value ? formatDate(formField.value, false) : '';

  const selected = formField.value ? new Date(formField.value) : undefined;

  const onSelect = (event: Date) => {
    formField.onChange(event.toISOString());
  };

  return (
    <Select value={formField.value}>
      <FormControl>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Выберите дату">{formattedDate}</SelectValue>
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <Calendar
          className="w-full"
          mode="single"
          required
          selected={selected}
          onSelect={onSelect}
          disabled={(date) => date < new Date()}
        />
      </SelectContent>
    </Select>
  );
};
