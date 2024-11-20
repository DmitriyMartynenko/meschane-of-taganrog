import { useState } from 'react';

import NavBar from '../NavBar';
import Button from '../Button';

import logo from '../../assets/logo.png';

import styles from './Header.module.css';

type HeaderProps = {
  isMobile: boolean;
};

const Header = (props: HeaderProps) => {
  const { isMobile } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {isMobile && (
        <div className={styles.headerLogoWithButtonContainer}>
          <div className={styles.headerLogoContainer}>
            <img
              className={styles.headerLogo}
              src={logo}
              alt='Логотип проекта "Мещане Таганрога"'
            />
          </div>
          <div className={styles.headerButtonContainer}>
            <Button onClick={toggleMenu}>Меню</Button>
          </div>
        </div>
      )}

      {(isMenuOpen || !isMobile) && <NavBar />}

      <hr className={styles.headerHr} />
    </header>
  );
};

export default Header;
