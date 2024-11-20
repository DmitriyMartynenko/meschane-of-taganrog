import HeaderLink from '../HeaderLink';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navMenu}>
      <div
        className={`${styles.navLinksContainer} ${styles.navLinksContainerMobile}`}
      >
        <HeaderLink to="#">Главная</HeaderLink>
        <HeaderLink to="#">О мещанах</HeaderLink>
        <HeaderLink to="#">Анонсы</HeaderLink>
      </div>
      <div className={styles.navLinksContainer}>
        <HeaderLink to="#">Фото и видео</HeaderLink>
        <HeaderLink to="#">ТГЛИАМЗ</HeaderLink>
        <HeaderLink to="#">Контакты</HeaderLink>
      </div>
    </nav>
  );
};

export default NavBar;
