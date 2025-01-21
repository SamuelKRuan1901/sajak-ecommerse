import { SideBarContext } from '@/contexts/SideBarProvider';
import CompareItem from '@/pages/Compare/components/CompareItem';
import Footer from '@components/Footer/index';
import Header from '@components/Header/index';
import MainLayout from '@components/Layout/index';
import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/index';
import { moveCompareProductsToCart } from '@/apis/compareService';

const ComparePage = () => {
  const {
    compareProductList,
    handleGetProductsList,
    userId,
    setIsOpen,
    setType
  } = useContext(SideBarContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(compareProductList);

  const handleMoveToCart = async () => {
    setIsLoading(true);
    await moveCompareProductsToCart(userId)
      .then(() => {
        setIsOpen(true);
        setType('shoppingCart');
        handleGetProductsList(userId, 'shoppingCart');
        handleGetProductsList(userId, 'compare');
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <MainLayout>
        <div className={styles.container}>
          {compareProductList.map((item) => (
            <CompareItem
              key={item.compare_id}
              id={item.compare_id}
              name={item.name}
              desc={item.description}
              size={item.product_size}
              price={item.price}
              img={item.image1}
              materials={item.materials}
            />
          ))}
          <Button
            content={isLoading ? 'Loading...' : 'Move Items To Cart'}
            onClick={handleMoveToCart}
          />
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default ComparePage;
