import { useEffect, useRef, useState } from 'react';

export const useScrollHandling = () => {
  const [scrollDriction, setScrollDriction] = useState(null);
  const previousScrollPosition = useRef();
  const [scrollPosition, setScrollPosition] = useState(null);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDriction('down');
    } else if (currentScrollPosition < previousScrollPosition) {
      setScrollDriction('up');
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);
    return () => window.removeEventListener('scroll', scrollTracking);
  }, []);

  return {
    scrollDriction,
    scrollPosition
  };
};
