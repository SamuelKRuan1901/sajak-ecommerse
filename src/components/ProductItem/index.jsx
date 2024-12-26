import styles from './styles.module.scss';
import { IoMdEye } from 'react-icons/io';
import { useContext, useState } from 'react';
import cls from 'classnames';
import Cookies from 'js-cookie';
import { FaArrowsRotate } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { FaBox } from 'react-icons/fa';
import Button from '@components/Button';
import { ToastContext } from '@contexts/ToastProvider';
import { SideBarContext } from '@contexts/SideBarProvider';
import { addProductToCart } from '@/apis/cartService';
import { addProductToCompare } from '@/apis/compareService';
import { addProductToWishlist } from '@/apis/wishlistService';

const ProductItem = ({
  productId,
  src,
  preSrc,
  name,
  price,
  isHomepage = true,
  sizes,
  desc,
  materials
}) => {
  const [chooseSize, setChooseSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setIsOpen, setType, setViewProduct, handleGetProductsList } =
    useContext(SideBarContext);

  const { toast } = useContext(ToastContext);
  const userId = Cookies.get('userId');
  const handleChooseSize = (size) => {
    setChooseSize(size);
    setIsLoading(false);
  };

  const handleViewProduct = async () => {
    setIsOpen(true);
    setType('viewProduct');
    const data = {
      productId,
      src,
      preSrc,
      name,
      price,
      sizes,
      desc,
      materials
    };
    setViewProduct(data);
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart');
      return;
    }
    if (!chooseSize) {
      toast.warning('Please choose size');
      return;
    }
    const data = {
      userId,
      productId,
      quantity: 1,
      size: chooseSize
    };
    await addProductToCart(data)
      .then(() => {
        setIsOpen(true);
        setType('shoppingCart');
        toast.success('Add product to cart successfully');
        handleGetProductsList(userId, 'shoppingCart');
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddToCompare = async () => {
    setIsLoading(true);
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart');
      return;
    }
    if (!chooseSize) {
      toast.warning('Please choose size');
      return;
    }
    const data = {
      userId,
      productId,
      quantity: 1,
      size: chooseSize
    };
    await addProductToCompare(data)
      .then(() => {
        setIsOpen(true);
        setType('compare');
        toast.success('Add product to compare successfully');
        handleGetProductsList(userId, 'compare');
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddToWishlist = async () => {
    setIsLoading(true);
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart');
      return;
    }
    if (!chooseSize) {
      toast.warning('Please choose size');
      return;
    }
    const data = {
      userId,
      productId,
      quantity: 1,
      size: chooseSize
    };
    await addProductToWishlist(data)
      .then(() => {
        setIsOpen(true);
        setType('wishlist');
        toast.success('Add product to wishlist successfully');
        handleGetProductsList(userId, 'wishlist');
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className={styles.boxImg}>
        <img src={src} alt='image' />
        <img className={styles.showWhenHover} src={preSrc} alt='image' />
        <div className={styles.showFuncWhenHover}>
          <div className={styles.boxIcon}>
            <FaBox style={{ fontSize: '20px' }} />
          </div>
          <div className={styles.boxIcon} onClick={handleAddToWishlist}>
            <FaHeart style={{ fontSize: '20px' }} />
          </div>
          <div className={styles.boxIcon} onClick={handleAddToCompare}>
            <FaArrowsRotate style={{ fontSize: '20px' }} />
          </div>
          <div className={styles.boxIcon} onClick={handleViewProduct}>
            <IoMdEye style={{ fontSize: '23px' }} />
          </div>
        </div>
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.price}>${price}</div>
      {!isHomepage && (
        <div className={styles.sizeContainer}>
          <div className={styles.sizeBox}>
            {sizes.map((size) => (
              <div
                key={size.id}
                className={cls(styles.sizeIcon, {
                  [styles.isActiveSize]: chooseSize === size.value
                })}
                onClick={() => handleChooseSize(size.value)}
              >
                {size.value}
              </div>
            ))}
            {chooseSize && (
              <div
                className={styles.clearBtn}
                onClick={() => setChooseSize('')}
              >
                clear
              </div>
            )}
          </div>
          <Button
            content={isLoading ? 'Loading' : 'Add To Cart'}
            onClick={handleAddToCart}
            disabled={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default ProductItem;
