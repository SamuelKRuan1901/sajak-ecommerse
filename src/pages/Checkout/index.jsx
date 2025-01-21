import Header from '@components/Header/index';
import Steps from '@pages/Checkout/components/Steps';
import Footer from '@components/Footer/index';
import styles from './styles.module.scss';
import Content from '@pages/Checkout/components/Content';

const CheckoutPage = () => {
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

export default CheckoutPage;
