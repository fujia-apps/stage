import { createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router';

import HomePage from 'pages/Home';
import { DragOrder } from '@/pages/DragOrder';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/drag-order',
    element: <DragOrder />,
  },
];

export const appRouter = createBrowserRouter(routes);
