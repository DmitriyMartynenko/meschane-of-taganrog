'use client';

import { ComponentProps, useEffect, useRef } from 'react';
import {
  DayButton,
  DayPicker,
  getDefaultClassNames,
  type ChevronProps,
  type RootProps,
  type WeekNumberProps,
} from 'react-day-picker';
import { type VariantProps } from 'class-variance-authority';
import { ru } from 'date-fns/locale';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { cn } from '@/shared/lib/utils/cn';
import { Button, buttonVariants } from '@/shared/ui/common/Button';

type CalendarProps = {
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
} & ComponentProps<typeof DayPicker>;

export const Calendar = (props: CalendarProps) => {
  const {
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = 'label',
    buttonVariant = 'ghost',
    formatters,
    components,
    ...restProps
  } = props;

  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      locale={ru}
      showOutsideDays={showOutsideDays}
      className={cn(
        'group/calendar bg-background-primary p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('flex gap-4 flex-col md:flex-row relative', defaultClassNames.months),
        month: cn('flex flex-col w-full gap-4 capitalize', defaultClassNames.month),
        nav: cn(
          'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_next
        ),
        month_caption: cn(
          'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px]',
          defaultClassNames.dropdown_root
        ),
        dropdown: cn('absolute inset-0 opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-foreground-muted [&>svg]:size-3.5',
          defaultClassNames.caption_label
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'text-foreground-muted flex-1 font-normal text-[0.8rem] select-none capitalize',
          defaultClassNames.weekday
        ),
        week: cn('flex w-full mt-2', defaultClassNames.week),
        week_number_header: cn('select-none w-(--cell-size)', defaultClassNames.week_number_header),
        week_number: cn(
          'text-[0.8rem] select-none text-foreground-muted',
          defaultClassNames.week_number
        ),
        day: cn(
          'relative w-full h-full p-0 text-center group/day aspect-square select-none',
          defaultClassNames.day
        ),
        range_start: cn('bg-background-secondary text-blue-500', defaultClassNames.range_start),
        range_middle: cn('', defaultClassNames.range_middle),
        range_end: cn('bg-background-secondary text-blue-500', defaultClassNames.range_end),
        today: cn('bg-accent text-black', defaultClassNames.today),
        outside: cn(
          'text-foreground-muted aria-selected:text-foreground-muted',
          defaultClassNames.outside
        ),
        disabled: cn('text-foreground-muted opacity-50', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: CalendarRoot,
        Chevron: CalendarChevron,
        DayButton: CalendarDayButton,
        WeekNumber: CalendarWeekNumber,
        ...components,
      }}
      {...restProps}
    />
  );
};

const CalendarRoot = (props: RootProps) => {
  const { className, rootRef, ...restProps } = props;

  return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...restProps} />;
};

const CalendarChevron = (props: ChevronProps) => {
  const { className, orientation, ...restProps } = props;

  if (orientation === 'left') {
    return <ChevronLeftIcon className={cn('size-4', className)} {...restProps} />;
  }

  if (orientation === 'right') {
    return <ChevronRightIcon className={cn('size-4', className)} {...restProps} />;
  }

  return <ChevronDownIcon className={cn('size-4', className)} {...restProps} />;
};

export const CalendarDayButton = (props: ComponentProps<typeof DayButton>) => {
  const { className, day, modifiers, ...restProps } = props;

  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-semibold transition-colors duration-150 ease-in-out data-[range-end=true]:bg-accent-primary data-[range-end=true]:text-foreground-primary data-[range-middle=true]:bg-accent-primary data-[range-middle=true]:text-foreground-primary data-[range-start=true]:bg-accent-primary data-[range-start=true]:text-foreground-primary data-[selected-single=true]:bg-primary data-[selected-single=true]:text-foreground-secondary [&>span]:text-xs [&>span]:opacity-70',
        defaultClassNames.day,
        className
      )}
      {...restProps}
    />
  );
};

const CalendarWeekNumber = (props: WeekNumberProps) => {
  const { children, ...restProps } = props;

  return (
    <td {...restProps}>
      <div className="flex size-(--cell-size) items-center justify-center text-center">
        {children}
      </div>
    </td>
  );
};
