// import Button from '@components/Button';
import styles from './styles.module.scss';
import Button from '@components/Button';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Sajak. Shop</h2>
        <div>Right here! We got everything you need</div>
        <Button content={'Go to Shop'} />
      </div>
    </div>
  );
};

export default Hero;
