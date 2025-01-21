import styles from '../styles.module.scss';
import Stepper from './Stepper';

const Steps = () => {
  const dataSteps = [
    { num: 1, content: 'shopping cart' },
    { num: 2, content: 'checkout' },
    { num: 3, content: 'order status' }
  ];
  return (
    <div className={styles.containerSteps}>
      <div className={styles.steps}>
        {dataSteps.map((item, index) => {
          return (
            <>
              <Stepper
                key={index}
                number={item.num}
                content={item.content}
                isDisabled={item.num !== 2}
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
