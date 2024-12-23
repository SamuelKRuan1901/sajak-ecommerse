import styles from '../styles.module.scss';

import { OurShopContext } from '@contexts/OurShopProvider';
import { useContext } from 'react';
import SelectBox from '@pages/OurShop/components/SelectBox';

const Filter = () => {
  const { showOptions, sortOptions, setSortId, setShowId } =
    useContext(OurShopContext);

  const getValueSelect = (value, type) => {
    if (type === 'sort') {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };

  return (
    <div className={styles.containerFilter}>
      <div className={styles.boxLeft}>
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type='sort'
        />
      </div>
      <div className={styles.boxLeft}>
        <div style={{ fontSize: '14px', color: '#555' }}>Show</div>
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type='show'
        />
      </div>
    </div>
  );
};

export default Filter;
