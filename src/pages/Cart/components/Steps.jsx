import Stepper from '@pages/Cart/components/Stepper';
import styles from '../styles.module.scss';

const Steps = () => {
  const dataSteps = [
    { num: 1, content: 'shopping cart' },
    { num: 2, content: 'checkout' },
    { num: 3, content: 'order status' }
  ];
  return (
    <div className={styles.containerSteps}>
      <div className={styles.steps}>
        {dataSteps.map((item) => {
          return (
            <>
              <Stepper
                key={item.num}
                number={item.num}
                content={item.content}
                isDisabled={item.num !== 1}
              />
              {item.num !== dataSteps.length && <div className={styles.line} />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
