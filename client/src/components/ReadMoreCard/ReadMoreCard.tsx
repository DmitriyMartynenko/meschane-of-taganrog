import { ReactNode } from 'react';

import Button from '../Button';

import styles from './ReadMoreCard.module.css';

type ReadMoreCard = {
  children: ReactNode;
  date: string;
  compact?: boolean;
  imgSrc: string;
  imgAlt: string;
};

const ReadMoreCard = (props: ReadMoreCard) => {
  const { children: title, date, compact: isCompact, imgSrc, imgAlt } = props;

  return (
    <div className={styles.readMoreCard}>
      <div
        className={
          styles[
            isCompact
              ? 'readMoreCardImgContainerCompact'
              : 'readMoreCardImgContainer'
          ]
        }
      >
        <img
          className={styles.readMoreCardImg}
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className={styles.readMoreCardTextContainer}>
        <p className={styles.readMoreCardDate}>{date}</p>
        <p
          className={
            styles[isCompact ? 'readMoreCardTextCompact' : 'readMoreCardText']
          }
        >
          {title}
        </p>
        <div className={styles.readMoreCardButtonContainer}>
          <Button blackText={isCompact}>Читать</Button>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreCard;
