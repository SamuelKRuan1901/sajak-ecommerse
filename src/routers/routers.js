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
  },
  {
    path: '/compare',
    component: lazy(() => import('@pages/Compare'))
  },
  {
    path: '/search',
    component: lazy(() => import('@pages/Search'))
  },
  {
    path: '/checkout',
    component: lazy(() => import('@pages/Checkout'))
  }
];
