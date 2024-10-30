import Header from '@components/Header';
import Hero from '@components/Hero';
import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
