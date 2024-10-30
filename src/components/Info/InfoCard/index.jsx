import truckIcon from '@icons/truckicon.svg';
import styles from '../styles.module.scss';

const InfoCard = ({ content, desc, src }) => {
  return (
    <div className={styles.containerCard}>
      <img width={40} height={41} src={src} alt='TruckIcon' />
      <div className={styles.containerContent}>
        <div className={styles.title}>{content}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default InfoCard;
