import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

const Menu = ({ content, href }) => {
  const { setIsOpen, setType } = useContext(SideBarContext);
  const handleShowLogin = () => {
    if (content === 'Sign in') {
      setIsOpen(true);
      setType('login');
    }
  };
  return (
    <div className={styles.menu} onClick={handleShowLogin}>
      {content}
    </div>
  );
};

export default Menu;
