import Header from '@components/Header';
import Hero from '@components/Hero';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading';
import Info from '@components/Info';
import HeadingListProduct from '@components/HeadingListProduct';

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Hero />
        <Info />
        <AdvanceHeading />
        <HeadingListProduct />
      </div>
    </>
  );
};

export default HomePage;
