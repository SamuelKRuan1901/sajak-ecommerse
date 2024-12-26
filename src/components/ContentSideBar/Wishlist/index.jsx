import { BsHeart } from 'react-icons/bs';
import styles from './styles.module.scss';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import ProductItemSideBar from '@components/ContentSideBar/components/ProductItemSideBar';
import Button from '@components/Button';
import { SideBarContext } from '@contexts/SideBarProvider';
import { ToastContext } from '@contexts/ToastProvider';
import { moveWishlistProductsToCart } from '@/apis/wishlistService';

const Wishlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { wishlistProductList, setIsOpen, setType, handleGetProductsList } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const userId = Cookies.get('userId');

  const handleMoveToCart = async () => {
    setIsLoading(true);
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart');
      return;
    }
    await moveWishlistProductsToCart(userId)
      .then(() => {
        setIsOpen(true);
        setType('shoppingCart');
        toast.success('Add product to cart successfully');
        handleGetProductsList(userId, 'shoppingCart');
        handleGetProductsList(userId, 'wishlist');
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <HeaderSideBar
        icon={<BsHeart style={{ fontSize: '20px' }} />}
        title={'WISHLIST'}
      />
      <div className={styles.boxContent}>
        {wishlistProductList?.map((item) => (
          <ProductItemSideBar
            key={item.wishlist_id}
            Id={item.wishlist_id}
            name={item.name}
            size={item.size}
            price={item.price}
            img={item.image1}
          />
        ))}
      </div>
      <div className={styles.boxBtn}>
        <Button content={'View Wishlist'} />
        <Button
          content={isLoading ? 'Loading' : 'Add All To Cart'}
          onClick={handleMoveToCart}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default Wishlist;
