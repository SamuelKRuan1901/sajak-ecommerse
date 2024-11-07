import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import { BsHeart } from 'react-icons/bs';
import styles from './styles.module.scss';
import ProductItemSideBar from '@components/ContentSideBar/components/ProductItemSideBar';
import Button from '@components/Button';

const Wishlist = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxContent}>
        <HeaderSideBar
          icon={<BsHeart style={{ fontSize: '20px' }} />}
          title={'WISHLIST'}
        />
        <ProductItemSideBar />
      </div>
      <div className={styles.boxBtn}>
        <Button content={'View Wishlist'} />
        <Button content={'Add All To Cart'} />
      </div>
    </div>
  );
};

export default Wishlist;
