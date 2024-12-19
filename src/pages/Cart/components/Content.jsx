import CartProductItem from '@pages/Cart/components/CartProductItem';
import styles from '../styles.module.scss';
import CheckoutBox from '@pages/Cart/components/CheckoutBox';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

const Content = () => {
  const { cartProductList } = useContext(SideBarContext);
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.containerContent}>
        <div className={styles.productsList}>
          <div>
            {cartProductList.map((item, index) => (
              <CartProductItem
                key={index}
                Id={item.cart_id}
                img={item.image1}
                name={item.name}
                price={item.price}
                size={item.product_size}
                quantity={1}
              />
            ))}
          </div>
        </div>
        <CheckoutBox />
      </div>
    </div>
  );
};

export default Content;
