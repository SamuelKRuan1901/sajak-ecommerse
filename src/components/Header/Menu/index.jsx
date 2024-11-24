import { useContext, useState, useEffect } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { getInfo } from '@/apis/authService';
import Cookies from 'js-cookie';

const Menu = ({ content, href }) => {
  const { setIsOpen, setType } = useContext(SideBarContext);
  const [userInfo, setUserInfo] = useState(null);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const userId = Cookies.get('userId');

  console.log(userInfo);
  const handleShowProfile = (content) => {
    if (content === 'Sign in' && userInfo) {
      return `Hello ${userInfo.email}`;
    } else {
      return content;
    }
  };

  const handleHover = () => {
    if (content === 'Sign in' && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  const handleShowLogin = () => {
    if (content === 'Sign in') {
      setIsOpen(true);
      setType('login');
    }
  };

  const handleLogingOut = () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    setIsShowSubMenu(false);
    setUserInfo(null);
    window.location.reload();
  };

  useEffect(() => {
    if (userId) {
      getInfo(userId)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  return (
    <div
      className={styles.menu}
      onMouseOver={handleHover}
      onClick={handleShowLogin}
    >
      {handleShowProfile(content)}
      {isShowSubMenu && (
        <div
          className={styles.subMenu}
          onMouseLeave={() => setIsShowSubMenu(false)}
          onClick={handleLogingOut}
        >
          Logout
        </div>
      )}
    </div>
  );
};

export default Menu;
