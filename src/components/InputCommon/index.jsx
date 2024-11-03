import { useState } from 'react';
import styles from './styles.module.scss';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';

const InputCommon = ({ lable, type, isRequire = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isShowTextPassword =
    type === 'password' && showPassword ? 'text' : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.lableInput}>
        {lable} {isRequire && <span>*</span>}
      </div>
      <div className={styles.boxInput}>
        <input type={isShowTextPassword} />
        {isPassword && (
          <div className={styles.boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCommon;
