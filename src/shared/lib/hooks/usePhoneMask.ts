import { useState, useCallback } from 'react';

type OnValueChange = (value: string) => void;

export const usePhoneMask = (initialValue: string = '', onValueChange?: OnValueChange) => {
  const [value, setValue] = useState(initialValue);

  const getInputNumbersValue = useCallback((value: string) => value.replace(/\D/g, ''), []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      debugger
      const input = event.target;
      let inputNumbersValue = getInputNumbersValue(input.value);
      const selectionStart = input.selectionStart ?? input.value.length;

      // 1) Если цифр нет — сбрасываем
      if (!inputNumbersValue) {
        setValue('');
        onValueChange?.('');
        return;
      }

      // 2) Правка не в конце строки — откатываем только не-цифры
      if (input.value.length !== selectionStart) {
        // if (input.value && /\D/.test(input.value)) {
        //   setValue(inputNumbersValue);
        //   onValueChange?.(inputNumbersValue);
        // }

        return;
      }

      // 3) Основное форматирование
      let formatted = '';
      if (['7', '8', '9'].includes(inputNumbersValue[0])) {
        if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue;
        const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
        formatted = firstSymbols + ' ';
        if (inputNumbersValue.length > 1) formatted += '(' + inputNumbersValue.substring(1, 4);
        if (inputNumbersValue.length >= 5) formatted += ') ' + inputNumbersValue.substring(4, 7);
        if (inputNumbersValue.length >= 8) formatted += '-' + inputNumbersValue.substring(7, 9);
        if (inputNumbersValue.length >= 10) formatted += '-' + inputNumbersValue.substring(9, 11);
      } else {
        formatted = '+' + inputNumbersValue.substring(0, 16);
      }

      setValue(formatted);
      onValueChange?.(formatted);
    },
    [getInputNumbersValue, onValueChange]
  );

  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      const pasted = event.clipboardData || window.ClipboardItem;
      if (pasted) {
        const text = pasted.getData('Text');
        if (/\D/.test(text)) {
          const nums = getInputNumbersValue(value);
          setValue(nums);
          onValueChange?.(nums);
        }
      }
    },
    [getInputNumbersValue, value, onValueChange]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const nums = getInputNumbersValue(value);
      if (event.key === 'Backspace' && nums.length === 1) {
        setValue('');
        onValueChange?.('');
      }
    },
    [getInputNumbersValue, value, onValueChange]
  );

  return { value, handleChange, handlePaste, handleKeyDown };
};
