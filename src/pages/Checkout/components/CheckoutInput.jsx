import styles from '../styles.module.scss';

const CheckoutInput = ({ label, type = 'text', ...props }) => {
  return (
    <>
      <label className={styles.checkoutInputStyle}>
        {label}
        <input type={type} {...props} />
      </label>
    </>
  );
};

export default CheckoutInput;
