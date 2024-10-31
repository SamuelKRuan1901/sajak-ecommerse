import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hrs: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        Mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Secs: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const formatNumber = (number) => {
    return String(number).padStart(2, '0');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((inverval) => {
    if (timeLeft[inverval] !== undefined) {
      timerComponents.push(
        <span key={inverval} className={styles.box}>
          {formatNumber(timeLeft[inverval])}{' '}
          <span className={styles.timeMark}>{inverval}</span>{' '}
        </span>
      );
    }
  });

  return timerComponents;
};

export default CountdownTimer;
