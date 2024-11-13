import styles from './Input.module.css';

type InputProps = {
  variant?: string;
  type?: string;
  placeholder?: string;
};

const Input = (props: InputProps) => {
  const { variant = 'primary', type = 'text', placeholder = '' } = props;

  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
};

export default Input;
