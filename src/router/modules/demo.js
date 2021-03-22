import { lazy } from 'react';

const routes = [
  {
    path: '/api',
    name: 'api',
    component: lazy(() => import('../../views/demo/api.jsx'))
  },
  {
    path: '/chart',
    name: 'chart',
    component: lazy(() => import('../../views/demo/chart.jsx'))
  },
  {
    path: '/filters',
    name: 'filters',
    component: lazy(() => import('../../views/demo/filters.jsx'))
  },
  {
    path: '/form',
    name: 'form',
    component: lazy(() => import('../../views/demo/form.jsx'))
  },
  {
    path: '/mock',
    name: 'mock',
    component: lazy(() => import('../../views/demo/mock.jsx'))
  },
  {
    path: '/modal',
    name: 'modal',
    component: lazy(() => import('../../views/demo/modal.jsx'))
  }
];

export default routes;
