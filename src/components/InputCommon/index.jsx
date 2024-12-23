import { useState } from 'react';
import styles from './styles.module.scss';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';

const InputCommon = ({ label, type, isRequire = false, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { formik, id } = props;
  const isPassword = type === 'password';
  const isShowTextPassword =
    type === 'password' && showPassword ? 'text' : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isErr = formik.errors[id] && formik.touched[id];
  const errMessage = formik.errors[id];

  return (
    <div className={styles.container}>
      <div className={styles.labelInput}>
        {label} {isRequire && <span>*</span>}
      </div>
      <div className={styles.boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div className={styles.boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        )}
        {isErr && <div className={styles.error}>{errMessage}</div>}
      </div>
    </div>
  );
};

export default InputCommon;
