import Header from '@components/Header';
import MainLayout from '@components/Layout';
import Banner from '@pages/OurShop/components/Banner';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Filter from '@pages/OurShop/components/Filter';
import ProductsList from '@pages/OurShop/components/ProductsList';
import Footer from '@components/Footer';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
// import Header from '@/components/Header';
// import MainLayout from '@/components/Layout';
// import Banner from './components/Banner';
// import { OurShopProvider } from '@/contexts/OurShopProvider';
// import Filter from './components/Filter';
// import ProductsList from './components/ProductsList';
// import Footer from '@/components/Footer';

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
              {'<'} Return to previous page
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
