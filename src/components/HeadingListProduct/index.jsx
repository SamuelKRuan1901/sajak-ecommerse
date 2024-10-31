import MainLayout from '@components/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner';

const HeadingListProduct = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <CountdownBanner />
        <div className={styles.containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HeadingListProduct;
