import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ProductItemSideBar from '@components/ContentSideBar/components/ProductItemSideBar';
import Button from '@components/Button';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';

const ShoppingCart = () => {
  const { cartProductList } = useContext(SideBarContext);
  console.log(cartProductList);

  const subtotal = cartProductList.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  console.log(subtotal);

  return (
    <div className={styles.container}>
      <HeaderSideBar
        icon={<TfiReload style={{ fontSize: '20px' }} />}
        title={'CART'}
      />
      <div className={styles.boxContent}>
        {cartProductList?.map((item) => (
          <ProductItemSideBar
            key={item.cart_id}
            Id={item.cart_id}
            name={item.name}
            size={item.size}
            price={item.price}
            img={item.image1}
          />
        ))}
      </div>
      <div className={styles.boxBtn}>
        <div className={styles.total}>
          <span>SUBTOTAL</span>
          <span>${subtotal}</span>
        </div>
        <Button content={'View Cart'} />
        <Button content={'Checkout'} />
      </div>
    </div>
  );
};

export default ShoppingCart;
