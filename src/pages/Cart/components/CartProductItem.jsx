import { FaTrash } from 'react-icons/fa';
import styles from '../styles.module.scss';
import { deleteProductCart } from '@/apis/cartService';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { useContext } from 'react';

const CartProductItem = ({ Id, img, name, size, price, quantity }) => {
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
        <img src={img} alt='productimg' className={styles.productImage} />
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
        {quantity} x ${price}
      </div>
    </div>
  );
};

export default CartProductItem;
