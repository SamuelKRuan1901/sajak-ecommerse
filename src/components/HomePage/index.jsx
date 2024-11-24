import Header from '@components/Header';
import Hero from '@components/Hero';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading';
import Info from '@components/Info';
import HeadingListProduct from '@components/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProducts from '@components/PopularProducts';
import SaleHomePage from '@components/SaleHomePage';
import Footer from '@components/Footer';

const HomePage = () => {
  const [listProducts, setListProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts();
      setListProducts(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <Hero />
        <Info />
        <AdvanceHeading />
        <HeadingListProduct data={listProducts?.slice(0, 2)} />
        <PopularProducts data={listProducts?.slice(2, 10)} />
        <SaleHomePage />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
