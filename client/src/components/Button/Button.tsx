import styles from './Button.module.css';

import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | '';
  className?: string;
  textColor: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', className = '', onClick } = props;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[className]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
