import { ReactNode } from 'react';

import styles from './BenefitCard.module.css';

type BenefitCardProps = {
  imgSrc: string;
  children: ReactNode;
};

const BenefitCard = (props: BenefitCardProps) => {
  const { imgSrc, children: text } = props;

  return (
    <div className={styles.benefitCard}>
      <div className={styles.benefitCardImgContainer}>
        <img className={styles.benefitCardImg} src={imgSrc} alt="" />
      </div>
      <p className={styles.benefitCardText}>{text}</p>
    </div>
  );
};

export default BenefitCard;
