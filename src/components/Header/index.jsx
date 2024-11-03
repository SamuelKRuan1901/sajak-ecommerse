import React, { useEffect, useState } from 'react';
import { dataBoxIcon, dataMenu } from './constans';
import styles from './styles.module.scss';
import Menu from './Menu';
import rotateIcon from '@icons/rotateicon.svg';
import heartIcon from '@icons/hearticon.svg';
import cartIcon from '@icons/carticon.svg';
import BoxIcon from '@components/Header/BoxIcon';
import { useScrollHandling } from '@/hooks/useScrollHandling';
import classNames from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@/context/SideBarProvider';

const Header = () => {
  const { scrollPosition } = useScrollHandling();
  const [fixedPostion, setFixedPostion] = useState(false);

  const { isOpen, setIsOpen } = useContext(SideBarContext);

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
            {dataMenu.slice(3, 6).map((item) => (
              <Menu
                key={item.content}
                content={item.content}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
          <div className={styles.containerBoxIcon}>
            <img width={20} height={20} src={rotateIcon} alt='rotateIcon' />
            <img width={20} height={20} src={heartIcon} alt='heartIcon' />
            <img width={20} height={20} src={cartIcon} alt='cartIcon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
