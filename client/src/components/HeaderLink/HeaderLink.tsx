import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
  children: ReactNode;
  to: string;
};

const HeaderLink = (props: HeaderLinkProps) => {
  const { children: text, to } = props;

  return (
    <NavLink
      className={styles.headerLink}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default HeaderLink;
