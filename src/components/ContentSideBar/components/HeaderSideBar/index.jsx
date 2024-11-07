import styles from './styles.module.scss';

const HeaderSideBar = ({ icon, title }) => {
  return (
    <div className={styles.container}>
      {icon}
      <div>{title}</div>
    </div>
  );
};

export default HeaderSideBar;
