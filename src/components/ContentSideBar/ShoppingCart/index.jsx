import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import ProductItemSideBar from '@components/ContentSideBar/components/ProductItemSideBar';
import Button from '@components/Button';
import { SideBarContext } from '@contexts/SideBarProvider';

const ShoppingCart = () => {
  const { cartProductList, setIsOpen } = useContext(SideBarContext);
  const navigate = useNavigate();
  const subtotal = cartProductList.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const handleNavigateToCart = () => {
    navigate('/cart');
    setIsOpen(false);
  };

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
            size={item.product_size}
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
        <Button content={'View Cart'} onClick={handleNavigateToCart} />
        <Button content={'Checkout'} />
      </div>
    </div>
  );
};

export default ShoppingCart;
