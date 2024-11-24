import MainLayout from '@components/Layout';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem';

const PopularProducts = ({ data }) => {
  return (
    <>
      <MainLayout>
        <div className={styles.container}>
          {data?.map((item) => (
            <ProductItem
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
