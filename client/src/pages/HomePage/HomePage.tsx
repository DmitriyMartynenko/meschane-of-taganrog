import { useMediaQuery } from 'react-responsive';

import Header from '../../components/Header';
import Button from '../../components/Button';
import PhoneSignUp from '../../components/PhoneSignUp';
import Heading from '../../components/Heading';
import BenefitCard from '../../components/BenefitCard';

import logo from '../../assets/logo.png';
import stoneStair from '../../assets/stoneStair.png';
import meschanin from '../../assets/meschanin.png';
import quotes from '../../assets/quotes.png';
import {
  benefitCardImg1,
  benefitCardImg2,
  benefitCardImg3,
  benefitCardImg4,
} from '../../assets/benefitCardsImages';
import {
  meschane1,
  meschane2,
  meschane3,
} from '../../assets/meschaneOfTaganrog';

import styles from './HomePage.module.css';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <section className={styles.promoSection}>
        <Header isMobile={isMobile} />
        <div className={styles.promoContent}>
          <div className={styles.promoTitleContainer}>
            <h1 className={styles.promoTitle}>Иммерсивные экскурсии</h1>
            <PhoneSignUp
              text="Записаться на экскурсию"
              inputPlaceholder="+7 (___) ___ __ __"
              buttonText="Заказать экскурсию"
            />
          </div>
          <div className={styles.promoLogoContainer}>
            <img
              className={styles.promoLogo}
              src={logo}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={styles.meschaneInfoSection}>
        <div className={styles.stoneStairImgContainer}>
          <img
            className={styles.stoneStairImg}
            src={stoneStair}
            alt=""
          />
        </div>
        <div className={styles.meschaninImgContainer}>
          <img
            className={styles.meschaninImg}
            src={meschanin}
            alt=""
          />
        </div>
        <div className={styles.quotesImgContainer}>
          <img
            className={styles.quotesImg}
            src={quotes}
            alt=""
          />
        </div>
        <div className={styles.meschaneInfoTextContent}>
          <Heading
            subtitle="Слово мещанину:"
            wordsToHighlight={['не', 'все', 'равно']}
          >
            Потому что нам не все равно
          </Heading>
          <hr className={styles.meschaneInfoLine} />
          <p className={styles.meschaneInfoText}>
            В 1910-е гг. возросла политическая активность мещан. Она проявилась
            в организации и проведении Всероссийских съездов представителей
            мещанских обществ, а также съездов мещанских делегатов в 1917 г. Это
            было свидетельством жизнеспособности сословия, готовности мещан к
            переменам и защите своих прав, причем они не боялись прибегать к
            активным политическим действиям
          </p>
          <p className={styles.meschaneInfoAuthor}>
            Cмирнов Иван Николаевич
            <span className={styles.meschaneInfoJobTitle}>
              Кандидат исторических наук, <br />
              доцент
            </span>
          </p>
        </div>
      </section>
      <section className={styles.tryExcursionsSection}>
        <div className={styles.tryExcursionsHeadingContainer}>
          <p className={styles.tryExcursionsSubtitle}>
            Почему стоит попробовать
          </p>
          <h2 className={styles.tryExcursionsTitle}>
            Иммер<span className={styles.highlightedLetter}>с</span>ивные эк
            <span className={styles.highlightedLetter}>с</span>кур
            <span className={styles.highlightedLetter}>с</span>ии
          </h2>
        </div>
        <div className={styles.benefitCardsContainer}>
          <BenefitCard imgSrc={benefitCardImg1}>
            Погрузитесь в мещанский мир конца XIX-XX веков и узнайте, как жил
            Таганрог более 100 лет назад
          </BenefitCard>
          <BenefitCard imgSrc={benefitCardImg2}>
            Получите уникальную научную информацию о жителях города прошлых
            веков
          </BenefitCard>
          <BenefitCard imgSrc={benefitCardImg3}>
            Проведите необычно свой досуг
          </BenefitCard>
          <BenefitCard imgSrc={benefitCardImg4}>
            Блестните своими знаниями в кругу друзей или в школе
          </BenefitCard>
        </div>
      </section>
      <section className={styles.meschaneOfTaganrog}>
        <p className={styles.meschaneOfTaganrogTitle}>Мещане г. Таганрога</p>
        <div className={styles.meschaneOfTaganrogImagesContainer}>
          <div className={styles.meschaneOfTaganrogImgContainer}>
            <img
              className={styles.meschaneOfTaganrogImg}
              src={meschane1}
              alt=""
            />
          </div>
          <div className={styles.meschaneOfTaganrogImgContainer}>
            <img
              className={styles.meschaneOfTaganrogImg}
              src={meschane2}
              alt=""
            />
          </div>
          <div className={styles.meschaneOfTaganrogImgContainer}>
            <img
              className={styles.meschaneOfTaganrogImg}
              src={meschane3}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
