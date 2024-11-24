import styles from './styles.module.scss';
import rotateIcon from '@icons/rotateicon.svg';
import heartIcon from '@icons/hearticon.svg';
import cartIcon from '@icons/carticon.svg';
import boxIcon from '@icons/boxicon.svg';

const ProductItem = ({ src, preSrc, name, price }) => {
  return (
    <div>
      <div className={styles.boxImg}>
        <img src={src} alt='' />
        <img className={styles.showWhenHover} src={preSrc} alt='' />
        <div className={styles.showFuncWhenHover}>
          <div className={styles.boxIcon}>
            <img src={boxIcon} alt='rotateIcon' />
          </div>
          <div className={styles.boxIcon}>
            <img src={heartIcon} alt='rotateIcon' />
          </div>
          <div className={styles.boxIcon}>
            <img src={rotateIcon} alt='heartIcon' />
          </div>
          <div className={styles.boxIcon}>
            <img src={cartIcon} alt='cartIcon' />
          </div>
        </div>
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.price}>{price}</div>
    </div>
  );
};

export default ProductItem;
