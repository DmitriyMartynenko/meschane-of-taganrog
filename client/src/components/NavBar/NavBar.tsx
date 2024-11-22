import Link from '../Link';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navMenu}>
      <div
        className={`${styles.navLinksContainer} ${styles.navLinksContainerMobile}`}
      >
        <Link
          className={styles.headerLink}
          to="/"
        >
          Главная
        </Link>
        <Link
          className={styles.headerLink}
          to="#meschaneInfo"
        >
          О мещанах
        </Link>
        <Link
          className={styles.headerLink}
          to="#tryExcursions"
        >
          Анонсы
        </Link>
      </div>
      <div className={styles.navLinksContainer}>
        <Link
          className={styles.headerLink}
          to="#meschaneOfTaganrog"
        >
          Фото и видео
        </Link>
        <Link
          className={styles.headerLink}
          to="#ourPartners"
        >
          ТГЛИАМЗ
        </Link>
        <Link
          className={styles.headerLink}
          to="#footerContactInfo"
        >
          Контакты
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
