import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import InputCommon from '@components/InputCommon';
import Button from '@components/Button';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn, getInfo } from '@/apis/authService';
import { SideBarContext } from '@contexts/SideBarProvider';
import { StoreContext } from '@contexts/storeProvider';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsOpen, handleGetProductsList } = useContext(SideBarContext);
  const { setUserId, userId } = useContext(StoreContext);

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
    onSubmit: async (values) => {
      if (isLoading) return;
      const { email, password } = values;
      if (isRegister) {
        setIsLoading(true);
        await register({
          email,
          password
        })
          .then((res) => {
            toast.success(res.data.msg);
            setIsLoading(false);
          })
          .catch((error) => {
            toast.error(error.response.data.msg);
            setIsLoading(false);
          });
      }
      if (!isRegister) {
        setIsLoading(true);
        await signIn({
          email,
          password
        })
          .then((res) => {
            if (res) {
              Cookies.set('userId', res.data.id);
              Cookies.set('token', res.data.token);
              toast.success('Logged In');
              setIsLoading(false);
              setIsOpen(false);
              setUserId(res.data.id);
              handleGetProductsList(userId, 'shoppingCart');
            }
          })
          .catch((error) => {
            if (error.status === 401) {
              toast.error(error.response.data.msg);
              setIsLoading(false);
            }
          });
      }
    }
  });
  return (
    <div className={styles.container}>
      <div className={styles.title}>{isRegister ? 'REGISTER' : 'LOGIN'}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          label={'Email'}
          type={'text'}
          id={'email'}
          name={'email'}
          isRequire
          formik={formik}
        />
        <InputCommon
          label={'Password'}
          type={'password'}
          id={'password'}
          name={'password'}
          isRequire
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            label={'Confirm Password'}
            type={'password'}
            id={'CFpassword'}
            name={'CFpassword'}
            isRequire
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={styles.remember}>
            <input type='checkbox' />
            <span>Remember me</span>
          </div>
        )}
        <Button
          content={isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOGIN'}
          type={'submit'}
          // onClick={() => toast.success('Success')}
        />
      </form>
      <div className={styles.lostPW}>Lost your Password</div>
      <div className={styles.lostPW} onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? `Already have an account >>>` : `Register now >>>`}
      </div>
    </div>
  );
};

export default Login;
