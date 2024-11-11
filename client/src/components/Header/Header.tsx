import HeaderLink from '../HeaderLink';

import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.menu}>
          <div className={styles.linksContainer}>
            <HeaderLink to="#">Главная</HeaderLink>
            <HeaderLink to="#">О мещанах</HeaderLink>
            <HeaderLink to="#">Анонсы</HeaderLink>
          </div>
          <div className={styles.linksContainer}>
            <HeaderLink to="#">Фото и видео</HeaderLink>
            <HeaderLink to="#">ТГЛИАМЗ</HeaderLink>
            <HeaderLink to="#">Контакты</HeaderLink>
          </div>
        </nav>
        <hr className={styles.hr} />
      </header>
    </>
  );
};

export default Header;
