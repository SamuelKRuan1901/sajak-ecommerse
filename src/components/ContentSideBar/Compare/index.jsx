import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ProductItemSideBar from '@components/ContentSideBar/components/ProductItemSideBar';
import Button from '@components/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

const Compare = () => {
  const { compareProductList } = useContext(SideBarContext);
  console.log(compareProductList);

  return (
    <div className={styles.container}>
      <HeaderSideBar
        icon={<TfiReload style={{ fontSize: '20px' }} />}
        title={'COMPARE'}
      />
      <div className={styles.boxContent}>
        {compareProductList?.map((item) => (
          <ProductItemSideBar
            key={item.compare_id}
            Id={item.compare_id}
            name={item.name}
            size={item.size}
            price={item.price}
            img={item.image1}
          />
        ))}
      </div>
      <div>
        <Button content={'View Compare'} />
      </div>
    </div>
  );
};

export default Compare;
