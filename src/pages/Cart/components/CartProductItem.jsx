import { FaTrash } from 'react-icons/fa';
import styles from '../styles.module.scss';
import { useContext } from 'react';
import { deleteProductCart } from '@/apis/cartService';
import { SideBarContext } from '@contexts/SideBarProvider';
// import { SideBarContext } from '@/contexts/SideBarProvider';

const CartProductItem = ({ Id, img, name, size, price }) => {
  const { handleGetProductsList, userId } = useContext(SideBarContext);

  const handleDeleteItem = async () => {
    await deleteProductCart(Id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    await handleGetProductsList(userId, 'shoppingCart');
  };

  return (
    <div className={styles.containerProduct}>
      <div className={styles.productContentLeft}>
        <img src={img} alt='productImg' className={styles.productImage} />
        <div className={styles.productInfo}>
          <div className={styles.title}>{name}</div>
          <div className={styles.productSize}>size: {size}</div>
        </div>
      </div>
      <div className={styles.productContentRight}>
        <FaTrash
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={handleDeleteItem}
        />
        1 x ${price}
      </div>
    </div>
  );
};

export default CartProductItem;
