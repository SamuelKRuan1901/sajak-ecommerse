import axiosClient from './axiosClient';
const getProducts = async () => {
  const res = await axiosClient.get(`/api/products`);
  return res.data;
};

const getShopProducts = async (query) => {
  const res = await axiosClient.get('/api/shop/products', {
    params: query
  });
  return res.data;
};

export { getProducts, getShopProducts };
