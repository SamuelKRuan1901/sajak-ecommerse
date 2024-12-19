import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem';
import styles from '../styles.module.scss';
import MainLayout from '@components/Layout';
import Button from '@components/Button';

const ProductsList = () => {
  const sizes = [
    { id: 1, value: 'S' },
    { id: 2, value: 'M' },
    { id: 3, value: 'L' }
  ];
  const [showBtn, setShowBtn] = useState(true);
  const { products, setShowId } = useContext(OurShopContext);
  const handleLoadMore = () => {
    setShowId('all');
    setShowBtn(false);
  };

  console.log(products);

  return (
    <>
      <MainLayout>
        <div className={styles.containerProductsList}>
          {products?.map((item) => (
            <div key={item.id} className={styles.productItemContainer}>
              <ProductItem
                productId={item.id}
                src={item.image1}
                preSrc={item.image2}
                name={item.name}
                price={item.price}
                sizes={sizes}
                isHomepage={false}
                desc={item.description}
                materials={item.materials}
              />
            </div>
          ))}
        </div>
        {showBtn && <Button content={'Load More'} onClick={handleLoadMore} />}
      </MainLayout>
    </>
  );
};

export default ProductsList;
