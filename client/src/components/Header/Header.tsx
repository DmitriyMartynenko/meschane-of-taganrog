import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import NavBar from '../NavBar';
import Button from '../Button';

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
        <Button
          className="menuButton"
          onClick={toggleMenu}
        >
          Меню
        </Button>
      )}

      {(isMenuOpen || !isMobile) && <NavBar />}

      <hr className={styles.hr} />
    </header>
  );
};

export default Header;
