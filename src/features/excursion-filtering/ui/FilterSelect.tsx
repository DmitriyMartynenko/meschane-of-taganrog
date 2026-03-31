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
        <SelectTrigger className="w-full border-0 border-b border-secondary/25 px-0 text-base tracking-wide text-foreground-secondary transition-colors duration-300 ease-in-out hover:border-secondary/50 focus:border-ring-primary focus:ring-0 data-placeholder:text-muted-primary/80">
          <SelectValue placeholder={placeholder} />
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
        <SelectGroup>
          {groupLabel && (
            <SelectLabel className="text-[10px] tracking-widest text-secondary/40 uppercase">
              {groupLabel}
            </SelectLabel>
          )}
          {regularOptions.map((option) => (
            <SelectItem
              className="text-base tracking-wide text-foreground-secondary focus:bg-primary/25 focus:text-accent-primary"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
