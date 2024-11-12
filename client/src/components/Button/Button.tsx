import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    children
  } = props

  return <button>{children}</button>;
};

export default Button;
