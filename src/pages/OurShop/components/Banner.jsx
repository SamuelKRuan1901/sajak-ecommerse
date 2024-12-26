import CountdownTimer from '@components/CountdownTimer';
import Button from '@components/Button';
import styles from '../styles.module.scss';
// import CountdownTimer from '@/components/CountdownTimer';
// import Button from '@/components/Button';

const Banner = () => {
  const targetDate = '2025-12-31T00:00:00';
  return (
    <>
      <div className={styles.containerBanner}>
        <div className={styles.contentBox}>
          <div className={styles.countdownBox}>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className={styles.title}>The Classix Make A Comeback</div>
          <Button content={'Buy Now'} />
        </div>
      </div>
    </>
  );
};

export default Banner;
