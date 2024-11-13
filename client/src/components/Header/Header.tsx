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
        <div className={styles.logoWithButtonContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="" />
          </div>
          <Button className="headerMenuButton" onClick={toggleMenu}>
            Меню
          </Button>
        </div>
      )}

      {(isMenuOpen || !isMobile) && <NavBar />}

      <hr className={styles.hr} />
    </header>
  );
};

export default Header;
