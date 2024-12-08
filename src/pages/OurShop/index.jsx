import Header from '@components/Header';
import MainLayout from '@components/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import Filter from '@pages/OurShop/components/Filter';
import ProductsList from '@pages/OurShop/components/ProductsList';
import Footer from '@components/Footer';

const OurShop = () => {
  const navigate = useNavigate();
  const handleBackPrevious = () => {
    navigate(-1);
  };

  return (
    <OurShopProvider>
      <Header />
      <MainLayout>
        <div className={styles.container}>
          <div className={styles.functionBox}>
            <div>
              Home {'>'} <span className={styles.specialText}>Shop</span>
            </div>
            <div className={styles.btnBack} onClick={handleBackPrevious}>
              {'<'} Return to previos page
            </div>
          </div>
        </div>
        <Banner />
        <div style={{ marginBottom: '50px' }}>
          <Filter />
          <ProductsList />
        </div>
      </MainLayout>
      <Footer />
    </OurShopProvider>
  );
};

export default OurShop;
