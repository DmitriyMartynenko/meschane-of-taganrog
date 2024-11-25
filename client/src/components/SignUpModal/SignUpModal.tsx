import { FormEvent } from 'react';
import { createPortal } from 'react-dom';

import Input from '../Input/Input';
import Heading from '../Heading';
import Button from '../Button';

import closeButton from '../../assets/closeButton.png';

import styles from './SignUpModal.module.css';

const modalContainer = document.getElementById('modals');

type SignUpModalProps = {
  isOpen?: boolean;
  toggleModal: () => void;
  telInputValue?: string;
  isMobile?: boolean;
};

const SignUpModal = (props: SignUpModalProps) => {
  const { isOpen, toggleModal, telInputValue, isMobile } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const orderExcursionFormData = new FormData(event.currentTarget);
    const orderExcursionFormJSON = Object.fromEntries(orderExcursionFormData);
    console.log(orderExcursionFormJSON);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.signUpModal}>
      <div className={styles.signUpModalWrapper}>
        <form className={styles.signUpModalForm} onSubmit={handleSubmit}>
          <button
            className={styles.signUpModalButtonClose}
            onClick={toggleModal}
          >
            <img
              className={styles.signUpModalButtonCloseImg}
              src={closeButton}
              alt="Крестик закрытия"
            />
          </button>
          <div className={styles.signUpModalContainer}>
            <div className={styles.signUpModalHeadingContainer}>
              <Heading>Оставьте заявку мы с вами свяжемся</Heading>
            </div>
            <div className={styles.signUpModalInputsCotnainer}>
              <Input
                name="orderExcursionName"
                placeholder="Ваше имя"
                required
                border
              />
              <Input
                type="tel"
                name="orderExcursionTelephone"
                value={telInputValue}
                placeholder="+7 (___) ___ __ __"
                minLength={12}
                maxLength={12}
                required
                border
              />
              <Input
                type="email"
                name="orderExcursionEmail"
                placeholder="Ваш e-mail"
                required
                border
              />
            </div>
            <div className={styles.signUpModalSubmitButtonContainer}>
              <Button blackText>Отправить</Button>
              {isMobile && <Button blackText onClick={toggleModal}>Закрыть</Button>}
            </div>
          </div>
        </form>
      </div>
    </div>,
    modalContainer!
  );
};

export default SignUpModal;
