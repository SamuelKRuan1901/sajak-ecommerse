import { createContext, useEffect, useState } from 'react';
import { getProductCart } from '@/apis/cartService';
import Cookies from 'js-cookie';
import { getProductCompare } from '@/apis/compareService';
import { getProductWishlist } from '@/apis/wishlistService';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const [cartProductList, setCartProductList] = useState([]);
  const [viewProduct, setViewProduct] = useState();
  const [compareProductList, setCompareProductList] = useState([]);
  const [wishlistProductList, setWishlistProductList] = useState([]);
  const userId = Cookies.get('userId');

  const handleGetProductsList = (userId, type) => {
    if (userId && type === 'shoppingCart') {
      getProductCart()
        .then((res) => {
          setCartProductList(res.data);
        })
        .catch((err) => {
          setCartProductList([]);
        });
    }
    if (userId && type === 'compare') {
      getProductCompare()
        .then((res) => {
          setCompareProductList(res.data);
          console.log(compareProductList);
        })
        .catch((err) => {
          setCompareProductList([]);
        });
    }
    if (userId && type === 'wishlist') {
      getProductWishlist()
        .then((res) => {
          setWishlistProductList(res.data);
          console.log(wishlistProductList);
        })
        .catch((err) => {
          setWishlistProductList([]);
        });
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    setViewProduct,
    viewProduct,
    handleGetProductsList,
    cartProductList,
    compareProductList,
    wishlistProductList,
    userId
  };

  useEffect(() => {
    handleGetProductsList(userId, 'shoppingCart');
    handleGetProductsList(userId, 'compare');
    handleGetProductsList(userId, 'wishlist');
  }, []);

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
