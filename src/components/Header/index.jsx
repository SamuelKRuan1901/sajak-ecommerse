import React, { useEffect, useState } from 'react';
import { dataBoxIcon, dataMenu } from './constans';
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

const Header = () => {
  const { scrollPosition } = useScrollHandling();
  const [fixedPostion, setFixedPostion] = useState(false);

  const { setIsOpen, setType } = useContext(SideBarContext);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  useEffect(() => {
    setFixedPostion(scrollPosition > 80 ? true : false);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(styles.container, styles.topHeader, {
        [styles.fixedHeader]: fixedPostion
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
            <TfiReload
              style={{ fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleOpenSideBar('compare')}
            />
            <BsHeart
              style={{ fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleOpenSideBar('wishlist')}
            />
            <PiShoppingBagLight
              style={{ fontSize: '28px', cursor: 'pointer' }}
              onClick={() => handleOpenSideBar('shoppingCart')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
