import axiosClient from './axiosClient';
const getProducts = async () => {
  const res = await axiosClient.get('/api/products');
  return res.data;
};

export { getProducts };
