import CountdownTimer from '@components/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button';

const CountdownBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTimer}>
        <CountdownTimer targetDate={'2025-12-31T00:00:00'} />
      </div>
      <p className={styles.desc}>The Classic Make A Comeback</p>
      <Button content={'Buy now'} />
    </div>
  );
};

export default CountdownBanner;
