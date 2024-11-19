import { useMediaQuery } from 'react-responsive';

import Header from '../../components/Header';
import Button from '../../components/Button';
import SignUp from '../../components/SignUp';
import Heading from '../../components/Heading';
import BenefitCard from '../../components/BenefitCard';
import Review from '../../components/Review';
import ReadMoreCard from '../../components/ReadMoreCard';

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
import tgliamz from '../../assets/TGLIAMZ.png';
import { reviewAuthor1 } from '../../assets/reviewAuthorsPhotos';
import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import {
  readMoreImg1,
  readMoreImg2,
  readMoreImg3,
  readMoreImg4,
} from '../../assets/readMoreCardImages';

import styles from './HomePage.module.css';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isSquare = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <>
      <section className={styles.promoSection}>
        <Header isMobile={isMobile} />
        <div className={styles.promoContent}>
          <div className={styles.promoTitleContainer}>
            <h1 className={styles.promoTitle}>Иммерсивные экскурсии</h1>
            <div className={styles.promoSignUpContainer}>
              <SignUp
                inputPlaceholder="+7 (___) ___ __ __"
                buttonText="Заказать экскурсию"
              >
                Записаться на экскурсию
              </SignUp>
            </div>
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
        {!isSquare && !isMobile && (
          <div className={styles.meschaninImgContainer}>
            <img
              className={styles.meschaninImg}
              src={meschanin}
              alt=""
            />
            <img
              className={styles.quotesImg}
              src={quotes}
              alt=""
            />
          </div>
        )}
        <div className={styles.meschaneInfoTextContent}>
          <Heading
            subtitle="Слово мещанину:"
            lineBeforeSubtitle={true}
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
      <section className={styles.meschaneOfTaganrogSection}>
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
      <section className={styles.ourPartnersSection}>
        <h2 className={styles.ourPartnersTitle}>Наши партнеры</h2>
        <div className={styles.ourPartnersImgContainer}>
          <img
            className={styles.ourPartnersTGLIAMZimg}
            src={tgliamz}
            alt=""
          />
        </div>
        <p className={styles.ourPartnersText}>
          Таганрогский государственный литературный и историко-архитектурный
          музей-заповедник
        </p>
      </section>
      <section className={styles.reviewsSection}>
        <Heading
          subtitle="О нас говорят"
          wordsToHighlight={['Отзывы']}
        >
          Отзывы наших клиентов
        </Heading>
        <div className={styles.reviewContainer}>
          <div className={styles.buttonsContainer}>
            <button className={styles.arrowLeft}>
              <img
                src={arrowLeft}
                alt=""
              />
            </button>
            <Review
              author="Юлия Воробьева"
              authorJobTitle="Директор компании “Воробьева и ко”"
              authorImgSrc={reviewAuthor1}
            >
              Я обеспечу представление Ваших интересов в судах общей юрисдикции,
              арбитраже, третейском суде, приму участие в переговорах, окажу
              помощь на стадии досудебного урегулирования споров.
            </Review>
            <button className={styles.arrowRight}>
              <img
                src={arrowRight}
                alt=""
              />
            </button>
          </div>
          <div className={styles.paginationContainer}>
            <button className={styles.paginationButton}></button>
            <button
              className={`${styles.paginationButton} ${styles.paginationButtonActive}`}
            ></button>
            <button className={styles.paginationButton}></button>
            <button className={styles.paginationButton}></button>
          </div>
        </div>
      </section>
      <section className={styles.goodToKnowSection}>
        <div className={styles.goodToKnowHeadingContainer}>
          <Heading
            subtitle="Наш блог"
            lineBeforeSubtitle={true}
            wordsToHighlight={['Полезно']}
          >
            Полезно знать
          </Heading>
          <div className={styles.goodToKnowButtonContainer}>
            <Button isTextBlack={true}>Читать больше</Button>
          </div>
        </div>
        <div className={styles.readMoreContainer}>
          <ReadMoreCard
            imgSrc={readMoreImg1}
            date="15 апреля"
          >
            Как использовать закон в свою пользу?
          </ReadMoreCard>
          <ReadMoreCard
            isCompact={true}
            imgSrc={readMoreImg2}
            date="09 апреля"
          >
            Библиотека юристов. Что почитать?
          </ReadMoreCard>
          <ReadMoreCard
            isCompact={true}
            imgSrc={readMoreImg3}
            date="06 марта"
          >
            На что обратить внимание в документах?
          </ReadMoreCard>
          <ReadMoreCard
            isCompact={true}
            imgSrc={readMoreImg4}
            date="23 февраля"
          >
            Залог успешных дел наших юристов
          </ReadMoreCard>
        </div>
      </section>
      <section className={styles.subscribeSection}>
        <Heading
          subtitle="Будьте в курсе"
          lineBeforeSubtitle={false}
          wordsToHighlight={['Подпишитесь']}
        >
          Подпишитесь на наши новости
        </Heading>
        <p className={styles.subscribeText}>
          Чтобы всегда быть в курсе мещанских дел
        </p>
        <div className={styles.emailContainer}>
          <SignUp
            inputPlaceholder="Ваш e-mail"
            buttonText="Подписаться"
          />
        </div>
      </section>
      <section className={styles.footerSection}>
        <div className={styles.footerMapContainer}>
          <iframe
            className={styles.footerMap}
            src="https://yandex.ru/map-widget/v1/-/CDxqq6LW"
          ></iframe>
        </div>
        <div className={styles.footerContactInfoContainer}>
          <Heading
            subtitle="На связи с вами"
            lineBeforeSubtitle={true}
            wordsToHighlight={['Контактная']}
          >
            Контактная информация
          </Heading>
          <div className={styles.footerContactInfoTextContainer}>
            <p className={styles.footerContactInfoPhoneNumber}>
              Телефон:{' '}
              <span className={styles.footerContactInfoHighlighted}>
                (8634) 61-14-66
              </span>
            </p>
            <p className={styles.footerContactInfoAddress}>
              Адрес:{' '}
              <span className={styles.footerContactInfoHighlighted}>
                г. Таганрог, ул. Октябрьская, 9
              </span>
            </p>
            <p className={styles.footerContactInfoEmail}>
              e-mail:{' '}
              <a className={styles.footerContactInfoEmailLink}>
                tgliamz.muzei@yandex.ru
              </a>
            </p>
          </div>
          <SignUp
            text="Нужна консультация?"
            inputPlaceholder="+7 (___) ___ __ __"
            buttonText="Заказать звонок"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
