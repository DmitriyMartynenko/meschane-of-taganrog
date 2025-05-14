'use client';

import { Toaster as Sonner, type ToasterProps } from 'sonner';

export const Toaster = (props: ToasterProps) => {
  const { position = 'bottom-right', richColors = true, toastOptions, ...restProps } = props;

  return (
    <Sonner
      position={position}
      richColors={richColors}
      toastOptions={{
        classNames: {
          default: '!font-montserrat',
          toast: '!rounded-none !bg-background-primary !shadow-lg',
          title: '!font-semibold',
          cancelButton: '!rounded-none !font-semibold',
        },
        ...toastOptions,
      }}
      {...restProps}
    />
  );
};
