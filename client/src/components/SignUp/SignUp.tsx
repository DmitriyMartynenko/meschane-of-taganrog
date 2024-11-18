import Input from '../Input/Input';
import Button from '../Button';

import styles from './SignUp.module.css';

type SignUp = {
  children?: string;
  inputPlaceholder: string;
  buttonText: string;
};

const SignUp = (props: SignUp) => {
  const { children: text, inputPlaceholder, buttonText } = props;

  return (
    <div className={styles.signUp}>
      {text && <p className={styles.signUpText}>{text}</p>}
      <div className={styles.orderContainer}>
        <Input type="text" placeholder={inputPlaceholder} />
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default SignUp;
