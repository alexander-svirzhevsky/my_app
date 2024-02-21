import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/Layout';
import { Home } from '@/pages/Home';
import '@/styles/index.css';
import { ThemeContextProvider } from './theme/ThemeContext';
const News = lazy(() => import('@/pages/News'));

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/news',
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
