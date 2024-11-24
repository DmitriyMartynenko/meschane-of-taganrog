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
};

const SignUpModal = (props: SignUpModalProps) => {
  const { isOpen, toggleModal, telInputValue } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJSON = Object.fromEntries(formData)
    console.log(formJSON)
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
              alt="Закрыть"
            />
          </button>
          <div className={styles.signUpModalContainer}>
            <div className={styles.signUpModalHeadingContainer}>
              <Heading>Оставьте заявку мы с вами свяжемся</Heading>
            </div>
            <div className={styles.signUpModalInputsCotnainer}>
              <Input
                id="name"
                name="name"
                placeholder="Ваше имя"
                required
                border
              />
              <Input
                type="tel"
                id="telephone"
                name="telephone"
                value={telInputValue}
                placeholder="+7 (___) ___ __ __"
                required
                border
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Ваш e-mail"
                required
                border
              />
            </div>
            <div className={styles.signUpModalButtonContainer}>
              <Button blackText>Отправить</Button>
            </div>
          </div>
        </form>
      </div>
    </div>,
    modalContainer!
  );
};

export default SignUpModal;
