import styles from './Button.module.css';

import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, className, onClick } = props;

  return (
    <button
      className={`${styles.button} ${styles[className!]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
