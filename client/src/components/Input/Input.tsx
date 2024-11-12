type InputProps = {
  type: string;
  placeholder?: string;
};

const Input = (props: InputProps) => {
  const { type, placeholder } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
