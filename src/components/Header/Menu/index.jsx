import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Cookies from 'js-cookie';
import { StoreContext } from '@/contexts/storeProvider';
import { useNavigate } from 'react-router-dom';

const Menu = ({ content, href }) => {
  const { setIsOpen, setType } = useContext(SideBarContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const { userInfo, setUserInfo } = useContext(StoreContext);
  const navigate = useNavigate();

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

    if (content === 'Our Shop') {
      navigate('/shop');
    }
  };

  const handleLogingOut = () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    setIsShowSubMenu(false);
    setUserInfo(null);
    window.location.reload();
  };

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
