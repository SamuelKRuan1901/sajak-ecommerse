import React from 'react';
import styles from './styles.module.scss';

const Button = ({ content, ...props }) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} {...props}>
        {content}
      </button>
    </div>
  );
};

export default Button;
