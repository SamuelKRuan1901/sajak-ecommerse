import styles from './styles.module.scss';
import productImg from '@images/product-img.jpg';
import { TfiClose } from 'react-icons/tfi';

const ProductItemSideBar = () => {
  return (
    <div className={styles.container}>
      <img src={productImg} alt='' />
      <div className={styles.boxContent}>
        <div className={styles.title}>product title</div>
        <div className={styles.size}>Size: M</div>
        <div className={styles.price}>
          {'1'} x ${'100'}
        </div>
        <div className={styles.sku}>SKU: 12349</div>
      </div>
      <div className={styles.closeIcon}>
        <TfiClose style={{ fontSize: '15px' }} />
      </div>
    </div>
  );
};

export default ProductItemSideBar;
