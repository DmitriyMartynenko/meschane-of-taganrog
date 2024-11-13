import { useMediaQuery } from 'react-responsive';

import Header from '../../components/Header';
import Button from '../../components/Button';
import PhoneSignUp from '../../components/PhoneSignUp';

import logo from '../../assets/logo.png';
import stoneStair from '../../assets/stoneStair.png'
import meschanin from '../../assets/meschanin.png'

import styles from './HomePage.module.css';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <section className={styles.promoSection}>
        <Header isMobile={isMobile} />
        <div className={styles.promoContainer}>
          <div className={styles.immersiveExcursionsContainer}>
            <h1 className={styles.immersiveExcursionsTitle}>
              Иммерсивные экскурсии
            </h1>
            <PhoneSignUp
              text="Записаться на экскурсию"
              inputPlaceholder="+7 (___) ___ __ __"
              buttonText="Заказать экскурсию"
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
      <section className={styles.meschaneInfoSection}>
        <div className={styles.stoneStairImgContainer}>
          <img className={styles.stoneStairImg} src={stoneStair} alt="" />
        </div>
        <div className={styles.meschaninImgContainer}>
          <img className={styles.meschaninImg} src={meschanin} alt="" />
        </div>
        <div>

        </div>
      </section>
    </>
  );
};

export default HomePage;
