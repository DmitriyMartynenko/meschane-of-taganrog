import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
  children: ReactNode;
  to: string;
};

const HeaderLink = (props: HeaderLinkProps) => {
  const { to, children } = props;

  return (
    <NavLink
      className={styles.link}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default HeaderLink;
