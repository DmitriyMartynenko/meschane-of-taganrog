import { ReactNode } from 'react';

import styles from './Heading.module.css';

type HeadingProps = {
  children: ReactNode;
  subtitle?: string;
  lineBeforeSubtitle?: boolean;
  wordsToHighlight?: string[];
  whiteTitleColor?: boolean; 
};

const Heading = (props: HeadingProps) => {
  const {
    children: title,
    subtitle,
    lineBeforeSubtitle,
    wordsToHighlight,
    whiteTitleColor,
  } = props;

  return (
    <div className={styles.heading}>
      {subtitle && (
        <div
          className={
            styles[
              lineBeforeSubtitle
                ? 'subtitleContainer'
                : 'subtitleContainerWithoutLine'
            ]
          }
        >
          {lineBeforeSubtitle && <span className={styles.headingLine}></span>}
          <p className={styles.headingSubtitle}>{subtitle}</p>
        </div>
      )}
      <h1 className={`${styles.headingTitle} ${whiteTitleColor ? styles.whiteHeadingTitle : ''}`}>
        {title.split(' ').map((word, index) => {
          if (wordsToHighlight?.includes(word))
            return <span key={`${index}_${word}`} className={`${styles.highlight} ${whiteTitleColor ? styles.lightHighlight : ''}`}>{word} </span>;
          return <span key={`${index}_${word}`}>{word} </span>;
        })}
      </h1>
    </div>
  );
};

export default Heading;
