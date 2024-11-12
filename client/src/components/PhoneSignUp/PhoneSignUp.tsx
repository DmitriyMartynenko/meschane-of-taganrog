import Input from '../Input/Input';
import Button from '../Button';

import styles from './PhoneSignUp.module.css';

type PhoneSignUp = {
  text: string,
  inputPlaceholder: string,
  buttonText: string
}

const PhoneSignUp = (props: PhoneSignUp) => {
  const {
    text,
    inputPlaceholder,
    buttonText
  } = props

  return (
    <div className={styles.phoneSignUp}>
      <p className={styles.phoneSignUpText}>{text}</p>
      <div className={styles.phoneNumberContainer}>
        <Input
          type="text"
          placeholder={inputPlaceholder}
        />
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default PhoneSignUp;
