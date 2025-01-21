import { useContext } from 'react';
import styles from '../styles.module.scss';
import { TfiClose } from 'react-icons/tfi';
import { SideBarContext } from '@contexts/SideBarProvider';
import { deleteProductCompare } from '@/apis/compareService';
import Button from '@components/Button/index';

const CompareItem = ({ id, name, desc, size, price, img, materials }) => {
  const { handleGetProductsList, userId, type } = useContext(SideBarContext);

  const handleDeleteFromCompare = async () => {
    await deleteProductCompare(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    await handleGetProductsList(userId, 'compare');
  };
  return (
    <div className={styles.compareItemContainer}>
      <img src={img} alt='productItem' />
      <div className={styles.detailContainer}>
        <div className={styles.nameStyle}>{name}</div>
        <div className={styles.sizeStyle}>Chosen size: {size}</div>
        <div className={styles.priceStyle}>${price}</div>
        <div className={styles.descStyle}>Description: {desc}</div>
        <div className={styles.descStyle}>Materials: {materials}</div>
      </div>
      <div className={styles.deleteBtn} onClick={handleDeleteFromCompare}>
        <TfiClose style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
};

export default CompareItem;
