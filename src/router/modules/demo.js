import { lazy } from 'react';

const routes = [
  {
    path: '/demo/api',
    name: 'api',
    component: lazy(() => import('@/views/demo/api.jsx'))
  },
  {
    path: '/demo/chart',
    name: 'chart',
    component: lazy(() => import('@/views/demo/chart.jsx'))
  },
  {
    path: '/demo/filters',
    name: 'filters',
    component: lazy(() => import('@/views/demo/filters.jsx'))
  },
  {
    path: '/demo/form',
    name: 'form',
    component: lazy(() => import('@/views/demo/form.jsx'))
  },
  {
    path: '/demo/mock',
    name: 'mock',
    component: lazy(() => import('@/views/demo/mock.jsx'))
  },
  {
    path: '/demo/modal',
    name: 'modal',
    component: lazy(() => import('@/views/demo/modal.jsx'))
  },
  {
    path: '/demo/redux',
    name: 'redux',
    component: lazy(() => import('@/views/demo/redux.jsx'))
  }
];

export default routes;
