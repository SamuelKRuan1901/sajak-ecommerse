import React, { useEffect, useState } from 'react';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingBagLight } from 'react-icons/pi';
import BoxIcon from '@components/Header/BoxIcon';
import { useScrollHandling } from '@/hooks/useScrollHandling';
import classNames from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Cookies from 'js-cookie';

const Header = () => {
  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);
  const userId = Cookies.get('userId');

  const {
    setIsOpen,
    setType,
    cartProductList,
    compareProductList,
    wishlistProductList,
    handleGetProductsList
  } = useContext(SideBarContext);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
    if (userId && type === 'shoppingCart') {
      handleGetProductsList(userId, 'shoppingCart');
    }
    if (userId && type === 'compare') {
      handleGetProductsList(userId, 'compare');
    }
    if (userId && type === 'wishlist') {
      handleGetProductsList(userId, 'wishlist');
    }
  };

  useEffect(() => {
    setFixedPosition(scrollPosition > 80 ? true : false);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(styles.container, styles.topHeader, {
        [styles.fixedHeader]: fixedPosition
      })}
    >
      <div className={styles.containerHeader}>
        <div className={styles.containerBox}>
          <div className={styles.containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BoxIcon key={item.type} type={item.type} href={item.href} />
            ))}
          </div>
          <div className={styles.containerMenu}>
            {dataMenu.slice(0, 3).map((item) => (
              <Menu key={item.content} content={item.content} />
            ))}
          </div>
        </div>
        <div>
          <h1>SajaK.</h1>
        </div>
        <div className={styles.containerBox}>
          <div className={styles.containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => (
              <Menu key={index} content={item.content} />
            ))}
          </div>
          <div className={styles.containerBoxIcon}>
            <div className={styles.BoxCart}>
              <TfiReload
                style={{ fontSize: '20px', cursor: 'pointer' }}
                onClick={() => handleOpenSideBar('compare')}
              />
              <div className={styles.quantity}>{compareProductList.length}</div>
            </div>
            <div className={styles.BoxCart}>
              <BsHeart
                style={{ fontSize: '20px', cursor: 'pointer' }}
                onClick={() => handleOpenSideBar('wishlist')}
              />
              <div className={styles.quantity}>
                {wishlistProductList.length}
              </div>
            </div>
            <div className={styles.BoxCart}>
              <PiShoppingBagLight
                style={{ fontSize: '28px', cursor: 'pointer' }}
                onClick={() => handleOpenSideBar('shoppingCart')}
              />
              <div className={styles.quantity}>{cartProductList.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
