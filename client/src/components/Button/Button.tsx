import styles from './Button.module.css';

import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

const Button = (props: ButtonProps) => {
  const { children } = props;

  return <button className={styles.button}>{children}</button>;
};

export default Button;
