import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@/shared/config/i18n/i18n';
import { Layout } from '@/app/Layout';
import '@/app/styles/index.css';
import { ThemeContextProvider } from '@/app/contexts/theme/ThemeContext';
import { Home } from '@/pages/HomePage';
import { Routes } from '@/shared/constant/routes';

const News = lazy(() => import('@/pages/NewsPage'));

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: Routes.Main,
    element: (
      <Suspense fallback=''>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: Routes.News,
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <News />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);

root.render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>,
);
