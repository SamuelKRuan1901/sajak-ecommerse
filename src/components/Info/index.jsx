import { dataInfo } from './constants';
import InfoCard from '@components/Info/InfoCard';
import MainLayout from '@components/Layout';
import styles from './styles.module.scss';

const Info = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        {dataInfo.map((item, index) => (
          <InfoCard key={index} content={item.title} desc={item.desc} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Info;
