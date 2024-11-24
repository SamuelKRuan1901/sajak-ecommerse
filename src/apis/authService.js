import axiosClient from './axiosClient';

const register = async (body) => {
  console.log(body);
  return await axiosClient.post('/api/register', body);
};

const signIn = async (body) => {
  console.log(body);
  return await axiosClient.post('/api/login', body);
};

const getInfo = async (userId) => {
  return await axiosClient.get(`/api/user/info/${userId}`);
};

export { register };
export { signIn };
export { getInfo };
