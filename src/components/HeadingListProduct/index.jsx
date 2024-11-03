import MainLayout from '@components/Layout';
import styles from './styles.module.scss';
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
              key={item._id}
              src={item.images[0]}
              preSrc={item.images[1]}
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
