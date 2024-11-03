import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/context/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login';

const SideBar = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
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
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
