import InputCommon from '@components/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email.').required('Email is required'),
      password: Yup.string()
        .min(6, 'password must be at least 6 characters')
        .required('password is required'),
      CFpassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Password does not match'
      )
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>{isRegister ? 'REGISTER' : 'LOGIN'}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          lable={'Email'}
          type={'text'}
          id={'email'}
          isRequire
          formik={formik}
        />
        <InputCommon
          lable={'Password'}
          type={'password'}
          id={'password'}
          isRequire
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            lable={'Comfirm Password'}
            type={'password'}
            id={'CFpassword'}
            isRequire
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={styles.rememberme}>
            <input type='checkbox' />
            <span>Remenber me</span>
          </div>
        )}
        <Button content={isRegister ? 'REGISTER' : 'LOGIN'} type={'submit'} />
      </form>
      <div className={styles.lostPW}>Lost your Password</div>
      <div className={styles.lostPW} onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? `Already have an account >>>` : `Register now >>>`}
      </div>
    </div>
  );
};

export default Login;
