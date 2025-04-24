import { ComponentProps } from 'react';

import { Button } from '@/shared/ui/common/Button';
import { Input } from '@/shared/ui/common/Input';

import { cn } from '@/shared/lib/utils/cn';
import { Form } from '@/shared/ui/common/Form';

export const BookingForm = (props: ComponentProps<'form'>) => {
  const { className } = props;

  return (
    // <Form>
    //   <form className={cn('flex flex-col gap-6', className)}>
    //     <h2 className="pl-2 text-foreground-secondary uppercase">Записаться на экскурсию</h2>
    //     <div>
    //       <div className="flex gap-2">
    //         <Input className="basis-[55%]" type="tel" placeholder="+7 (___) ___ __ __" />
    //         <Button className="basis-[45%]" type="submit">Заказать экскурсию</Button>
    //       </div>
    //     </div>
    //   </form>
    // </Form>
    <div></div>
  );
};
