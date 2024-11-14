import { ReactNode } from 'react';

import styles from './Heading.module.css';

type HeadingProps = {
  children: ReactNode;
  subtitle?: string;
  wordsToHighlight?: string[];
};

const Heading = (props: HeadingProps) => {
  const { subtitle, wordsToHighlight, children: title } = props;

  return (
    <div className={styles.heading}>
      {subtitle && (
        <div className={styles.subtitleContainer}>
          <span className={styles.line}></span>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      )}
      <h1 className={styles.title}>
        {title.split(' ').map((word) => {
          if (wordsToHighlight?.includes(word))
            return <span className={styles.highlight}>{word} </span>;
          return <span>{word} </span>;
        })}
      </h1>
    </div>
  );
};

export default Heading;
