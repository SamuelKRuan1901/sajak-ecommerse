import { deleteProductCart } from '@/apis/cartService';
import { deleteProductWishlist } from '@/apis/wishlistService';
import { deleteProductCompare } from '@/apis/compareService';
import styles from './styles.module.scss';
import { TfiClose } from 'react-icons/tfi';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

const ProductItemSideBar = ({ name, size, price, img, Id }) => {
  const { handleGetProductsList, userId, type } = useContext(SideBarContext);
  const handleDeleteFromCard = async () => {
    switch (type) {
      case 'shoppingCart':
        await deleteProductCart(Id)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        await handleGetProductsList(userId, 'shoppingCart');
        break;
      case 'compare':
        await deleteProductCompare(Id)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        await handleGetProductsList(userId, 'compare');
        break;
      case 'wishlist':
        await deleteProductWishlist(Id)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        await handleGetProductsList(userId, 'wishlist');
        break;
    }
  };
  return (
    <div className={styles.container}>
      <img src={img} alt='' />
      <div className={styles.boxContent}>
        <div className={styles.title}>{name}</div>
        <div className={styles.size}>Size: {size}</div>
        <div className={styles.price}>
          {'1'} x ${price}
        </div>
      </div>
      <div className={styles.closeIcon} onClick={handleDeleteFromCard}>
        <TfiClose style={{ fontSize: '15px' }} />
      </div>
    </div>
  );
};

export default ProductItemSideBar;
