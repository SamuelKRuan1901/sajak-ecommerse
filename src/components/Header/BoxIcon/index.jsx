import styles from '../styles.module.scss';
import fbIcon from '@icons/fbicon.svg';
import igIcon from '@icons/igicon.svg';
import ytbIcon from '@icons/youtubeicon.svg';

const BOxIcon = ({ type, href }) => {
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ig':
        return igIcon;
      case 'youtube':
        return ytbIcon;
    }
  };

  return (
    <div className={styles.boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
};

export default BOxIcon;
