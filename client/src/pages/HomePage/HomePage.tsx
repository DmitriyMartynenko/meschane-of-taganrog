import Header from '../../components/Header';
import Button from '../../components/Button';
import PhoneSignUp from '../../components/PhoneSignUp';

import logo from '../../assets/logo1.png'

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section className={styles.promoSection}>
        <Header />
        <div className={styles.promoContainer}>
          <div className={styles.immersiveExcursionsContainer}>
            <h1 className={styles.immersiveExcursionsTitle}>
              Иммерсивные экскурсии
            </h1>
            <PhoneSignUp
              text="записаться на экскурсию"
              inputPlaceholder="+7 (___) ___ __ __"
              buttonText="заказать экскурсию"
            />
          </div>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src={logo}
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        123
      </section>
    </>
  );
};

export default HomePage;
