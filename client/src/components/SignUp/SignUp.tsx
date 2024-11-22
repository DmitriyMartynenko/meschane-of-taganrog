import Input from '../Input/Input';
import Button from '../Button';

import styles from './SignUp.module.css';

type SignUp = {
  children?: string;
  inputType?: string;
  inputPlaceholder: string;
  buttonText: string;
  buttonOnClick?: () => void;
};

const SignUp = (props: SignUp) => {
  const {
    children: text,
    inputType,
    inputPlaceholder,
    buttonText,
    buttonOnClick,
  } = props;

  return (
    <div className={styles.signUp}>
      {text && <p className={styles.signUpTitle}>{text}</p>}
      <div className={styles.signUpOrderContainer}>
        <div className={styles.signUpInputContainer}>
          <Input
            type={inputType}
            placeholder={inputPlaceholder}
          />
        </div>
        <div className={styles.signUpButtonContainer}>
          <Button
            blackText={inputPlaceholder === 'Ваш e-mail' ? true : false}
            onClick={buttonOnClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
    
  );
};

export default SignUp;
