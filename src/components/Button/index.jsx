import React from 'react';
import styles from './styles.module.scss';

const Button = ({ content }) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>{content}</button>
    </div>
  );
};

export default Button;
