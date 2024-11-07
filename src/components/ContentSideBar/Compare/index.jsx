import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ProductItemSideBar from '@components/ContentSideBar/components/ProductItemSideBar';
import Button from '@components/Button';

const Compare = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxContent}>
        <HeaderSideBar
          icon={<TfiReload style={{ fontSize: '20px' }} />}
          title={'COMPARE'}
        />
        <ProductItemSideBar />
      </div>
      <div>
        <Button content={'View Compare'} />
      </div>
    </div>
  );
};

export default Compare;
