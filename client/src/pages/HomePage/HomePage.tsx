import Header from '../../components/Header';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section className={styles.promoSection}>
        <Header />
        <div className={styles.promoContainer}>
          <div className={styles.immersiveExcursionsContainer}>
            <h1 className={styles.immersiveExcursionsText}>
              Иммерсивные экскурсии
            </h1>
            <div className={styles.excursionSignUpContainer}>
              <p className={styles.excursionSignUpText}>
                Записаться на экскурсию
              </p>
              <div className={styles.phoneNumberContainer}>
                <input
                  type="text"
                  placeholder="+7 (___)___ __ __"
                />
                <button>Заказать экскурсию</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
