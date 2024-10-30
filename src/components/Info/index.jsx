import { dataInfo } from '@components/Info/constant';
import InfoCard from '@components/Info/InfoCard';
import MainLayout from '@components/Layout';
import styles from './styles.module.scss';

const Info = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        {dataInfo.map((item) => (
          <InfoCard content={item.title} desc={item.desc} src={item.src} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Info;
