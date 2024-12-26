import styles from '../styles.module.scss';

const InfoCard = ({ content, desc, src }) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerContent}>
        <div className={styles.title}>{content}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default InfoCard;
