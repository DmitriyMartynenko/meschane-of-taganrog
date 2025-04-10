import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

type BookingFormProps = {
  className?: string;
};

export const BookingForm = (props: BookingFormProps) => {
  const { className = '' } = props;

  return (
    <form className={cn('flex flex-col gap-6', className)}>
      <h2 className="pl-2 text-background uppercase">Записаться на экскурсию</h2>
      <div>
        <div className="flex gap-2">
          <Input type="tel" placeholder="+7 (___) ___ __ __" className="grow-[1.5]" />
          <Button className="grow-1">Заказать экскурсию</Button>
        </div>
      </div>
    </form>
  );
};
