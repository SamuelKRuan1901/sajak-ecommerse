import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ProductItemSideBar from '@components/ContentSideBar/components/ProductItemSideBar';
import Button from '@components/Button';

const ShoppingCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxContent}>
        <HeaderSideBar
          icon={<TfiReload style={{ fontSize: '20px' }} />}
          title={'CART'}
        />
        <ProductItemSideBar />
      </div>
      <div className={styles.boxBtn}>
        <div className={styles.total}>
          <span>SUBTOTAL</span>
          <span>$100</span>
        </div>
        <Button content={'View Cart'} />
        <Button content={'Checkout'} />
      </div>
    </div>
  );
};

export default ShoppingCart;
