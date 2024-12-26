import styles from '../styles.module.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const BOxIcon = () => {
  return (
    <div className={styles.boxIcon}>
      <FaFacebookSquare
        style={{
          fontSize: '20px'
        }}
      />
      <FaYoutube style={{ fontSize: '20px' }} />
      <FaInstagram style={{ fontSize: '20px' }} />
    </div>
  );
};

export default BOxIcon;
