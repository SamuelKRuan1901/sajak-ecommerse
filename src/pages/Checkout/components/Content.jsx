import CheckoutInput from '@pages/Checkout/components/CheckoutInput';
import styles from '../styles.module.scss';
import React from 'react';
import Button from '@components/Button/index';

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <form action=''>
        <CheckoutInput label={'Username'} />
        <CheckoutInput label={'Email'} />
        <CheckoutInput label={'Address'} />
        <CheckoutInput label={'Phone Number'} type='number' />
        <CheckoutInput label={'Card Number'} type='number' />
        <CheckoutInput label={'Card Date'} type='number' />
        <CheckoutInput label={'CVC'} type='number' />
        <Button content={'Submit'} />
      </form>
    </div>
  );
};

export default Content;
