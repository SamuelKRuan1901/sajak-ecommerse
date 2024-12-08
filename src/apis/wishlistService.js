import axiosClient from './axiosClient';

const addProductToWishlist = async (data) => {
  return await axiosClient.post('/api/wishlist', data);
};

const moveWishlistProductsToCart = async () => {
  return await axiosClient.post('api/wishlist/move_to_cart');
};

const getProductWishlist = async () => {
  const res = await axiosClient.get('/api/wishlist');
  return res.data;
};

const deleteProductWishlist = async (wishlistId) => {
  console.log(wishlistId);
  return await axiosClient.delete(`/api/wishlist/${wishlistId}`);
};

export {
  addProductToWishlist,
  getProductWishlist,
  deleteProductWishlist,
  moveWishlistProductsToCart
};
