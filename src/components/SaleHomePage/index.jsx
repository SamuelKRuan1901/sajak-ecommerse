import Button from '@components/Button';
import styles from './styles.module.scss';
import saleOfYear1 from '@images/sale-of-year-1.jpg';
import saleOfYear2 from '@images/sale-of-year-2.jpg';

const SaleHomePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <img width={400} height={550} src={saleOfYear1} alt='' />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Sale Of The Year</h1>
        <p className={styles.desc}>
          libera sed faucilisis fermentum. Est nibh sed massa sodales.
        </p>
        <Button content={'Read more'} />
      </div>
      <div>
        <img width={400} height={550} src={saleOfYear2} alt='' />
      </div>
    </div>
  );
};

export default SaleHomePage;
