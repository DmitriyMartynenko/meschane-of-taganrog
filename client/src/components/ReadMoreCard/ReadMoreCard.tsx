import { ReactNode } from 'react';

import Button from '../Button';

import styles from './ReadMoreCard.module.css';

type ReadMoreCard = {
  children: ReactNode;
  isCompact?: boolean;
  imgSrc: string;
  date: string;
};

const ReadMoreCard = (props: ReadMoreCard) => {
  const { children: title, isCompact, imgSrc, date } = props;

  return (
    <div className={styles.readMore}>
     <div className={styles[isCompact ? 'readMoreImgContainerCompact' : 'readMoreImgContainer']}>
        <img className={styles.readMoreImg} src={imgSrc} alt="" />
      </div>
      <div className={styles.readMoreTextContainer}>
        <p className={styles.readMoreDate}>{date}</p>
        <p className={styles[isCompact ? 'readMoreTextCompact' : 'readMoreText']}>{title}</p>
        <Button>Читать</Button>
      </div>
    </div>
  );
};

export default ReadMoreCard;
