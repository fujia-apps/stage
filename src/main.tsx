import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from './routers';
import 'assets/styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={appRouter} />
);
