import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login';
import Compare from '@components/ContentSideBar/Compare';
import Wishlist from '@components/ContentSideBar/Wishlist';
import ShoppingCart from '@components/ContentSideBar/ShoppingCart';

const SideBar = () => {
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  console.log(type);

  const handleRenderComponents = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return <Wishlist />;
      case 'shoppingCart':
        return <ShoppingCart />;
      default:
        return <Login />;
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={classNames({ [styles.overlay]: isOpen })}
        onClick={handleClick}
      />
      <div
        className={classNames(styles.sideBar, {
          [styles.slideSlideBar]: isOpen
        })}
      >
        {isOpen && (
          <div className={styles.boxIcon} onClick={handleClick}>
            <TfiClose />
          </div>
        )}
        {handleRenderComponents()}
      </div>
    </div>
  );
};

export default SideBar;
