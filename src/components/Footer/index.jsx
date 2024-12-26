import styles from './styles.module.scss';
import { dataMenu } from '@components/Footer/constant';
import paypalImg from '@images/paypal.png';
import visaImg from '@images/visa.png';
import shoppingImg from '@images/shopping.png';
import applePayImg from '@images/apple-pay.png';
import aExImg from '@images/american-express.png';

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1>SajaK.</h1>
      <div className={styles.NavBox}>
        {dataMenu.map((item, index) => (
          <div key={index} className={styles.NavElement}>
            {item.content}
          </div>
        ))}
      </div>
      <div className={styles.payBox}>
        <p>Guaranteed safe checkout</p>
        <div className={styles.cardsBox}>
          <img src={aExImg} alt='' />
          <img src={paypalImg} alt='' />
          <img src={visaImg} alt='' />
          <img src={shoppingImg} alt='' />
          <img src={applePayImg} alt='' />
        </div>
      </div>
      <p>copyright © 2024 SajaK. theme. Created by SajaK.</p>
    </div>
  );
};

export default Footer;
