import styles from './Button.module.css';

import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  blackText?: boolean;
};

const Button = (props: ButtonProps) => {
  const { children: text, blackText: isTextBlack, onClick } = props;

  return (
    <button
      className={`${styles.button} ${
        isTextBlack ? styles.buttonTextBlack : ''
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
