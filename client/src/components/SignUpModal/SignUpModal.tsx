import { createPortal } from 'react-dom';

import Input from '../Input/Input';
import Heading from '../Heading';
import Button from '../Button';

import closeButton from '../../assets/closeButton.png';

import styles from './SignUpModal.module.css';

const modalContainer = document.getElementById('modals');

type SignUpModalProps = {
  open?: boolean;
  toggleModal: () => void;
};

const SignUpModal = (props: SignUpModalProps) => {
  const { open: isOpen, toggleModal } = props;

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.signUpModal}>
      <div className={styles.signUpModalWrapper}>
        <button
          className={styles.signUpModalButtonClose}
          onClick={toggleModal}
        >
          <img
            className={styles.signUpModalButtonCloseImg}
            src={closeButton}
            alt="Закрыть"
          />
        </button>
        <div className={styles.signUpModalContainer}>
          <div className={styles.signUpModalHeadingContainer}>
            <Heading>Оставьте заявку мы с вами свяжемся</Heading>
          </div>
          <div className={styles.signUpModalInputsCotnainer}>
            <Input
              placeholder="Ваше имя"
              border
            />
            <Input
              type="tel"
              placeholder="+7 (___) ___ __ __"
              border
            />
            <Input
              type="email"
              placeholder="Ваш e-mail"
              border
            />
          </div>
          <div className={styles.signUpModalButtonContainer}>
            <Button blackText>Отправить</Button>
          </div>
        </div>
      </div>
    </div>,
    modalContainer!
  );
};

export default SignUpModal;
