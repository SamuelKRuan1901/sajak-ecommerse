import { createContext, useEffect, useState } from 'react';
import { getShopProducts } from '@/apis/productsService';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    { label: 'Default sorting', value: '0' },
    { label: 'Sort by popularity', value: '1' },
    { label: 'Sort by average rating', value: '2' },
    { label: 'Sort by latest', value: '3' },
    { label: 'Sort by price: low to high', value: '4' },
    { label: 'Sort by price: high to low', value: '5' }
  ];

  const showOptions = [
    { label: '8', value: '8' },
    { label: '12', value: '12' },
    { label: 'All', value: 'all' }
  ];

  const [sortId, setSortId] = useState('0');
  const [showId, setShowId] = useState('8');
  const [products, setProducts] = useState();

  const values = {
    sortOptions,
    showOptions,
    setSortId,
    setShowId,
    products
  };

  useEffect(() => {
    const query = {
      sortType: sortId,
      page: 1,
      limit: showId
    };
    getShopProducts(query)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortId, showId]);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};
