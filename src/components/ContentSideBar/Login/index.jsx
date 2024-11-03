import InputCommon from '@components/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>LOGIN </div>
      <InputCommon lable={'Email'} type={'email'} isRequire />
      <InputCommon lable={'Password'} type={'password'} isRequire />
      <div className={styles.rememberme}>
        <input type='checkbox' />
        <span>Remenber me</span>
      </div>
      <Button content={'Login'} />
      <div className={styles.lostPW}>Lost your Password</div>
    </div>
  );
};

export default Login;
