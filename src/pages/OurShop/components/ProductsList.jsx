import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem';
import styles from '../styles.module.scss';
import MainLayout from '@components/Layout';
import Button from '@components/Button';

const ProductsList = () => {
  const { products, setShowId } = useContext(OurShopContext);

  const handleLoadMore = () => {
    setShowId('all');
  };

  return (
    <>
      <MainLayout>
        <div className={styles.containerProductsList}>
          {products?.map((item) => (
            <div className={styles.productItemContainer}>
              <ProductItem
                key={item.id}
                src={item.image1}
                preSrc={item.image2}
                name={item.name}
                price={item.price}
              />
              <Button content={'Add To Cart'} />
            </div>
          ))}
        </div>
        <Button content={'Load More'} onClick={handleLoadMore} />
      </MainLayout>
    </>
  );
};

export default ProductsList;
