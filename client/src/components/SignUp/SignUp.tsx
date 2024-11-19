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
      {text && <p className={styles.signUpTitle}>{text}</p>}
      <div className={styles.orderContainer}>
        <div className={styles.signUpInputContainer}>
          <Input
            type="text"
            placeholder={inputPlaceholder}
          />
        </div>
        <div className={styles.signUpButtonContainer}>
          <Button
            isTextBlack={inputPlaceholder === 'Ваш e-mail' ? true : false}
          >{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
