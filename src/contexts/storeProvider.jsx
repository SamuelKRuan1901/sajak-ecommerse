import { useEffect, useState, createContext } from 'react';
import Cookies from 'js-cookie';
import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const userId = Cookies.get('userId');

  useEffect(() => {
    try {
      if (userId) {
        getInfo(userId)
          .then((res) => {
            setUserInfo(res.data);
            console.log(userInfo);
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
    <StoreContext.Provider value={userInfo}>{children}</StoreContext.Provider>
  );
};
