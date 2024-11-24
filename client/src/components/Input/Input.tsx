import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';

type InputProps = {
  type?: string;
  id?: string;
  name?: string;
  value?: string;
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
        placeholder={placeholder}
        required={required}
      />
    );
  }
);

export default Input;
3