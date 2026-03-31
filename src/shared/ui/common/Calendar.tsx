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

import { cn } from '@/shared/lib';

import { Button, buttonVariants } from './Button';

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
        'group/calendar bg-background-primary p-3 [--cell-size:--spacing(8)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent',
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
        root: cn(defaultClassNames.root, 'w-fit', classNames?.root),
        months: cn(
          defaultClassNames.months,
          'flex gap-4 flex-col md:flex-row relative',
          classNames?.months
        ),
        month: cn(
          defaultClassNames.month,
          'flex flex-col w-full gap-4 capitalize',
          classNames?.month
        ),
        nav: cn(
          defaultClassNames.nav,
          'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
          classNames?.nav
        ),
        button_previous: cn(
          defaultClassNames.button_previous,
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          classNames?.button_previous
        ),
        button_next: cn(
          defaultClassNames.button_next,
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          classNames?.button_next
        ),
        month_caption: cn(
          defaultClassNames.month_caption,
          'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
          classNames?.month_caption
        ),
        dropdowns: cn(
          defaultClassNames.dropdowns,
          'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
          classNames?.dropdowns
        ),
        dropdown_root: cn(
          defaultClassNames.dropdown_root,
          'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring-primary/50 has-focus:ring-[3px]',
          classNames?.dropdown_root
        ),
        dropdown: cn(
          defaultClassNames.dropdown,
          'absolute inset-0 opacity-0',
          classNames?.dropdown
        ),
        caption_label: cn(
          defaultClassNames.caption_label,
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-primary [&>svg]:size-3.5',
          classNames?.caption_label
        ),
        table: 'w-full border-collapse',
        weekdays: cn(defaultClassNames.weekdays, 'flex', classNames?.weekdays),
        weekday: cn(
          defaultClassNames.weekday,
          'text-muted-primary flex-1 font-normal text-[0.8rem] select-none capitalize',
          classNames?.weekday
        ),
        week: cn(defaultClassNames.week, 'flex w-full mt-2', classNames?.week),
        week_number_header: cn(
          defaultClassNames.week_number_header,
          'select-none w-(--cell-size)',
          classNames?.week_number_header
        ),
        week_number: cn(
          defaultClassNames.week_number,
          'text-[0.8rem] select-none text-muted-primary',
          classNames?.week_number
        ),
        day: cn(
          defaultClassNames.day,
          'relative w-full h-full text-center group/day aspect-square select-none',
          classNames?.day
        ),
        day_button: cn(defaultClassNames.day_button, classNames?.day_button),
        range_start: cn(
          defaultClassNames.range_start,
          'bg-background-secondary text-blue-500',
          classNames?.range_start
        ),
        range_middle: cn(defaultClassNames.range_middle, '', classNames?.range_middle),
        range_end: cn(
          defaultClassNames.range_end,
          'bg-background-secondary text-blue-500',
          classNames?.range_end
        ),
        today: cn(
          defaultClassNames.today,
          'bg-muted-primary/50 text-foreground-secondary',
          classNames?.today
        ),
        outside: cn(
          defaultClassNames.outside,
          'text-muted-primary aria-selected:text-muted-primary',
          classNames?.outside
        ),
        disabled: cn(defaultClassNames.disabled, 'text-muted-primary', classNames?.disabled),
        hidden: cn(defaultClassNames.hidden, 'invisible', classNames?.hidden),
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
    return <ChevronLeftIcon className={cn('size-5', className)} strokeWidth={2} {...restProps} />;
  }

  if (orientation === 'right') {
    return <ChevronRightIcon className={cn('size-5', className)} strokeWidth={2} {...restProps} />;
  }

  return <ChevronDownIcon className={cn('size-5', className)} strokeWidth={2} {...restProps} />;
};

export const CalendarDayButton = (props: ComponentProps<typeof DayButton>) => {
  const { className, day, modifiers, ...restProps } = props;

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
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
        'flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 px-3 py-2 text-xs leading-none font-semibold transition-colors duration-150 ease-in-out data-[range-end=true]:bg-accent-primary data-[range-end=true]:text-foreground-primary data-[range-middle=true]:bg-accent-primary data-[range-middle=true]:text-foreground-primary data-[range-start=true]:bg-accent-primary data-[range-start=true]:text-foreground-primary data-[selected-single=true]:bg-primary data-[selected-single=true]:text-foreground-secondary [&>span]:text-xs [&>span]:opacity-70',
        className
      )}
      {...restProps}
    />
  );
};

const CalendarWeekNumber = (props: WeekNumberProps) => {
  const { children, className, ...restProps } = props;

  return (
    <td {...restProps}>
      <div
        className={cn('flex size-(--cell-size) items-center justify-center text-center', className)}
      >
        {children}
      </div>
    </td>
  );
};
