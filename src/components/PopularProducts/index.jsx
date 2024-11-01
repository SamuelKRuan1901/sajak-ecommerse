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
              src={item.images[0]}
              preSrc={item.images[1]}
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
