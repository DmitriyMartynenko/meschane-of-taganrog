import {
  FormControl,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';

import { isFilterActive, type FilterSelectProps } from '../model/filter.types';

export const FilterSelect = (props: FilterSelectProps) => {
  const {
    config: { placeholder, groupLabel, options = [] },
    formField,
  } = props;

  const anyOption = options.find((option) => !isFilterActive(option.value));
  const regularOptions = options.filter((option) => isFilterActive(option.value));

  return (
    <Select onValueChange={formField.onChange} value={formField.value}>
      <FormControl>
        <SelectTrigger className="w-70">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {anyOption && (
          <>
            <SelectItem value={anyOption.value}>{anyOption.label}</SelectItem>
            <SelectSeparator />
          </>
        )}
        <SelectGroup>
          {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
          {regularOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
