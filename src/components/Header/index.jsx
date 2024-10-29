import React from 'react';
import { dataBoxIcon, dataMenu } from './constans';
import styles from './styles.module.scss';
import Menu from './Menu';
import rotateIcon from '@icons/rotateicon.svg';
import heartIcon from '@icons/hearticon.svg';
import cartIcon from '@icons/carticon.svg';
import BOxIcon from '@components/Header/BoxIcon';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.containerBox}>
          <div className={styles.containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BOxIcon type={item.type} href={item.href} />
            ))}
          </div>
          <div className={styles.containerMenu}>
            {dataMenu.slice(0, 3).map((item) => (
              <Menu content={item.content} />
            ))}
          </div>
        </div>
        <div>
          <h1>SajaK.</h1>
        </div>
        <div className={styles.containerBox}>
          <div className={styles.containerMenu}>
            {dataMenu.slice(3, 6).map((item) => (
              <Menu content={item.content} />
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
