import axiosClient from './axiosClient';

const addProductToCart = async (data) => {
  return await axiosClient.post('/api/cart', data);
};

const getProductCart = async () => {
  const res = await axiosClient.get('/api/cart');
  return res.data;
};

const deleteProductCart = async (cartId) => {
  console.log(cartId);
  return await axiosClient.delete(`/api/cart/${cartId}`);
};

export { addProductToCart, getProductCart, deleteProductCart };
