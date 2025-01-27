import styles from './styles.module.scss';
import MainLayout from '@components/Layout';
import CountdownBanner from '@components/CountdownBanner';
import ProductItem from '@components/ProductItem';

const HeadingListProduct = ({ data }) => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <CountdownBanner />
        <div className={styles.containerItem}>
          {data?.map((item) => (
            <ProductItem
              productId={item.id}
              key={item.id}
              src={item.image1}
              preSrc={item.image2}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default HeadingListProduct;
