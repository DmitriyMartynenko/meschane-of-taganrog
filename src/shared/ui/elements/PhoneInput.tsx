import { type ComponentProps } from 'react';
import { InputMask, Track } from '@react-input/mask';

import { Input, inputVariants } from '../common/Input';
import { VariantProps } from 'class-variance-authority';

type PhoneInputProps = {
  variant: VariantProps<typeof inputVariants>['variant'];
} & ComponentProps<'input'>;

export const PhoneInput = (props: PhoneInputProps) => {
  const { variant, placeholder = '+7 (___) ___ __ __', ...restProps } = props;

  const track: Track = ({ inputType, value, data, selectionStart, selectionEnd }) => {
    if (inputType === 'insert' && selectionStart <= 1) {
      const formattedData = data.replace(/[^\d]/g, '');
      return /^[78]/.test(formattedData)
        ? `7${formattedData.slice(1)}`
        : /^[0-69]/.test(formattedData)
          ? `7${formattedData}`
          : data;
    }

    if (inputType !== 'insert' && selectionStart <= 1 && selectionEnd < value.length) {
      return selectionEnd > 2 ? '7' : selectionEnd === 2 ? false : data;
    }

    return data;
  };

  return (
    <InputMask
      component={Input}
      mask="+# (###) ### ## ##"
      replacement={{ '#': /\d/ }}
      track={track}
      variant={variant}
      placeholder={placeholder}
      {...restProps}
    />
  );
};
