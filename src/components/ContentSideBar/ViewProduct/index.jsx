import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button';
import cls from 'classnames';
import { SideBarContext } from '@contexts/SideBarProvider';
import { addProductToCart } from '@/apis/cartService';
import { ToastContext } from '@contexts/ToastProvider';

const ViewProduct = () => {
  const { viewProduct, userId, setIsOpen, setType, handleGetProductsList } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [chooseSize, setChooseSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sizes = viewProduct.sizes;

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
    const productId = viewProduct.productId;
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

  const handleChooseSize = (size) => {
    setChooseSize(size);
  };
  return (
    <div className={styles.container}>
      <img className={styles.containerImg} src={viewProduct.src} alt='' />
      <div className={styles.containerInfo}>
        <div>{viewProduct.name}</div>
        <div>${viewProduct.price}</div>
        <div>{viewProduct.desc}</div>
        <div>Material: {viewProduct.materials}</div>
      </div>
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
            <div className={styles.clearBtn} onClick={() => setChooseSize('')}>
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
    </div>
  );
};

export default ViewProduct;
