import {
  FormControl,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';

import { type FilterSelectProps } from '../model/types';

export const FilterSelect = (props: FilterSelectProps) => {
  const { config, formField } = props;
  const { placeholder, groupLabel, options = [] } = config;

  return (
    <Select onValueChange={formField.onChange} value={formField.value}>
      <FormControl>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
