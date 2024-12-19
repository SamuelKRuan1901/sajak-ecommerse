import { lazy } from 'react';

export const routers = [
  {
    path: '/',
    component: lazy(() => import('@components/HomePage'))
  },
  {
    path: '/blog',
    component: lazy(() => import('@components/Blog'))
  },
  {
    path: '/shop',
    component: lazy(() => import('@pages/OurShop'))
  },
  {
    path: '/cart',
    component: lazy(() => import('@pages/Cart'))
  }
];
