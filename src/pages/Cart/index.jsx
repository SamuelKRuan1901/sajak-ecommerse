import Footer from '@components/Footer';
import Header from '@components/Header';
import Steps from '@pages/Cart/components/Steps';
import Content from '@pages/Cart/components/Content';
import styles from './styles.module.scss';

const Cart = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Steps />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
