import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';

type InputProps = {
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  border?: boolean;
};

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      type = 'text',
      id,
      name,
      value,
      minLength,
      maxLength,
      placeholder,
      required,
      border,
    } = props;

    return (
      <input
        className={`${styles.input} ${border ? styles.borderedInput : ''}`}
        ref={ref}
        type={type}
        id={id}
        name={name}
        defaultValue={value}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
      />
    );
  }
);

export default Input;
3