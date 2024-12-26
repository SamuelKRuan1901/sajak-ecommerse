// import MainLayout from '@components/Layout';
import styles from './styles.module.scss';
import MainLayout from '@/components/Layout';

const AdvanceHeading = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.headline}></div>
        <div className={styles.containerMiddleBox}>
          <p className={styles.desc}>don't miss super offers </p>
          <p className={styles.title}>Our best products</p>
        </div>
        <div className={styles.headline}></div>
      </div>
    </MainLayout>
  );
};

export default AdvanceHeading;
