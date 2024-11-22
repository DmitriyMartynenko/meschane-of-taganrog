import styles from './Input.module.css';

type InputProps = {
  type?: string;
  placeholder: string;
  border?: boolean
};

const Input = (props: InputProps) => {
  const { type = 'text', placeholder, border } = props;

  return (
    <input
      className={`${styles.input} ${border ? styles.borderedInput : ''}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
