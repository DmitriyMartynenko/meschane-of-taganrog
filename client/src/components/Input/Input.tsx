import styles from './Input.module.css';

type InputProps = {
  type: string;
  placeholder?: string;
};

const Input = (props: InputProps) => {
  const { type, placeholder } = props;

  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
};

export default Input;
