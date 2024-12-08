import axiosClient from './axiosClient';

const addProductToCompare = async (data) => {
  return await axiosClient.post('/api/compare', data);
};

const getProductCompare = async () => {
  const res = await axiosClient.get('/api/compare');
  return res.data;
};

const deleteProductCompare = async (compareId) => {
  console.log(compareId);
  return await axiosClient.delete(`/api/compare/${compareId}`);
};

export { addProductToCompare, getProductCompare, deleteProductCompare };
