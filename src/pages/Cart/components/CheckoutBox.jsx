import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../styles.module.scss';
import Button from '@components/Button';
import { SideBarContext } from '@contexts/SideBarProvider';
import paypalImg from '@images/paypal.png';
import visaImg from '@images/visa.png';
import shoppingImg from '@images/shopping.png';
import applePayImg from '@images/apple-pay.png';
import aExImg from '@images/american-express.png';

const CheckoutBox = () => {
  const { cartProductList } = useContext(SideBarContext);
  const navigate = useNavigate();
  const subtotal = cartProductList.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className={styles.checkoutBox}>
      <div className={styles.totalBox}>
        <p className={styles.mainTitle}>CART TOTALS</p>
        <hr />
        <div className={styles.subtotal}>
          <span>Subtotal</span>
          <span>${parseFloat(subtotal).toFixed(2)}</span>
        </div>
        <div className={styles.total}>
          <span>TOTAL</span>
          <span>${parseFloat(subtotal).toFixed(2)}</span>
        </div>
        <hr />
        <div className={styles.btnBox}>
          <Button
            content={'PROCEED TO CHECKOUT'}
            onClick={() => navigate('/checkout')}
          />
          <Button
            content={'Continue Shopping'}
            onClick={() => navigate('/shop')}
          />
        </div>
      </div>
      <div className={styles.cardsBox}>
        <div>
          GUARANTEED <span>SAFE</span> CHECKOUT
        </div>
        <div className={styles.cards}>
          <img src={aExImg} alt='' />
          <img src={paypalImg} alt='' />
          <img src={visaImg} alt='' />
          <img src={shoppingImg} alt='' />
          <img src={applePayImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default CheckoutBox;
