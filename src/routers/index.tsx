import { createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router';

import HomePage from 'pages/Home';
import { DragOrder } from '@/pages/DragOrder';
import { WebWorker } from '@/pages/WebWorker';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/drag-order',
    element: <DragOrder />,
  },
  {
    path: '/worker',
    element: <WebWorker />,
  },
];

export const appRouter = createBrowserRouter(routes);
