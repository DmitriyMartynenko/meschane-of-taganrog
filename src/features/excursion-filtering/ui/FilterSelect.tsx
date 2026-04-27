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

import { type FilterSelectProps } from '../model/excursion-filtering.types';

export const FilterSelect = (props: FilterSelectProps) => {
  const {
    config: { placeholder, groupLabel, options = [] },
    formField,
  } = props;

  return (
    <Select onValueChange={formField.onChange} value={formField.value}>
      <FormControl>
        <SelectTrigger className="w-full border-0 border-b border-secondary/25 px-0 text-base tracking-wide text-foreground-secondary transition-colors duration-300 ease-in-out hover:border-secondary/50 focus:border-ring-primary focus:ring-0 data-placeholder:text-muted-primary/80">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent className="rounded-none border-primary/25 bg-[rgba(30,20,10,0.97)] backdrop-blur-md">
        <SelectGroup>
          {groupLabel && (
            <SelectLabel className="text-[10px] tracking-widest text-secondary/40 uppercase">
              {groupLabel}
            </SelectLabel>
          )}
          {options.map((option) => (
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
