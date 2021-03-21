import { lazy } from 'react';

const routes = [
  {
    path: 'api',
    component: lazy(() => import('../../views/demo/api.jsx'))
  },
  {
    path: 'chart',
    component: lazy(() => import('../../views/demo/chart.jsx'))
  },
  {
    path: 'filters',
    component: lazy(() => import('../../views/demo/filters.jsx'))
  },
  {
    path: 'form',
    component: lazy(() => import('../../views/demo/form.jsx'))
  },
  {
    path: 'mock',
    component: lazy(() => import('../../views/demo/mock.jsx'))
  },
  {
    path: 'modal',
    component: lazy(() => import('../../views/demo/modal.jsx'))
  }
];

export default routes;
