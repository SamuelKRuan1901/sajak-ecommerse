import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import { useContext } from 'react';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import ProductItemSideBar from '@components/ContentSideBar/components/ProductItemSideBar';
import Button from '@components/Button';
import { SideBarContext } from '@contexts/SideBarProvider';
import { useNavigate } from 'react-router-dom';

const Compare = () => {
  const { compareProductList, setIsOpen } = useContext(SideBarContext);
  console.log(compareProductList);
  const navigate = useNavigate();

  const handleViewCompare = () => {
    setIsOpen(false);
    navigate('/compare');
  };

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
        <Button content={'View Compare'} onClick={handleViewCompare} />
      </div>
    </div>
  );
};

export default Compare;
