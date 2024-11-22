import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
  openInNewTab?: boolean;
};

const Link = (props: LinkProps) => {
  const { children, className, to, openInNewTab } = props;

  return (
    <>
      {to.startsWith('/') ? (
        <NavLink
          className={className}
          to={to}
        >
          {children}
        </NavLink>
      ) : (
        <a
          className={className}
          href={to}
          target={openInNewTab ? '_blank' : '_self'}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default Link;
