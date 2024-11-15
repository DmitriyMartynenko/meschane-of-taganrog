import { ReactNode } from 'react';

import qoutes from '../../assets/quotes.png';

import styles from './Review.module.css';

type ReviewProps = {
  children: ReactNode;
  author: string;
  authorJobTitle: string;
  authorImgSrc: string;
};

const Review = (props: ReviewProps) => {
  const { children: text, author, authorJobTitle, authorImgSrc } = props;

  return (
    <div className={styles.review}>
      <div className={styles.cutout}></div>
      <div className={styles.reviewAuthorImgContainer}>
        <img
          className={styles.reviewAuthorImg}
          src={authorImgSrc}
          alt=""
        />
      </div>
      <div className={styles.quotesImg1Container}>
        <img
          className={styles.quotesImg1}
          src={qoutes}
          alt=""
        />
      </div>
      <div className={styles.quotesImg2Container}>
        <img
          className={styles.quotesImg2}
          src={qoutes}
          alt=""
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.reviewText}>{text}</p>
        <div className={styles.authorInfoContainer}>
          <p className={styles.reviewAuthor}>{author}</p>
          <p className={styles.reviewAuthorJobTitle}>{authorJobTitle}</p>
        </div>
      </div>
      <div className={styles.backgroundRectangle}></div>
    </div>
  );
};

export default Review;
