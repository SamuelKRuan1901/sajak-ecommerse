import styles from '../styles.module.scss';
import fbIcon from '@icons/fbIcon.svg';
import igIcon from '@icons/igIcon.svg';
import ytbIcon from '@icons/youtubeIcon.svg';

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
