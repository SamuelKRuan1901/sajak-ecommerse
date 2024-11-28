import { useEffect, useState, createContext } from 'react';
import Cookies from 'js-cookie';
import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(Cookies.get('userId'));

  const values = {
    userInfo,
    setUserInfo,
    userId,
    setUserId
  };

  useEffect(() => {
    try {
      if (userId) {
        getInfo(userId)
          .then((res) => {
            setUserInfo(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
