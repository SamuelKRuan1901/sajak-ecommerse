import styles from './styles.module.scss';
import MainLayout from '@components/Layout';
import ProductItem from '@components/ProductItem';

const PopularProducts = ({ data }) => {
  return (
    <>
      <MainLayout>
        <div className={styles.container}>
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
      </MainLayout>
    </>
  );
};

export default PopularProducts;
