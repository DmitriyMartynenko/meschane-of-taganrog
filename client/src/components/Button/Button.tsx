import styles from './Button.module.css';

import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  isTextBlack?: boolean;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { children: text, isTextBlack, onClick } = props;

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
