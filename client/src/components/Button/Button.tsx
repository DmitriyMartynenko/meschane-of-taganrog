import styles from './Button.module.css';

import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  blackText?: boolean;
  onClick?: () => void;
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
