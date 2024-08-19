import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@/shared/config/i18n/i18n';
import { Layout } from '@/app/Layout';
import '@/app/styles/index.css';
import { ThemeContextProvider } from '@/app/contexts/theme/ThemeContext';
import { Home } from '@/pages/HomePage';
import { Routes } from '@/shared/constant/routes';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { LoaderPage } from './pages/LoaderPage';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider';
import { GuardedRoute } from './shared/lib/guarderRoute/GuardedRoute';

const Profile = lazy(() => import('@/pages/ProfilePage'));
const Articles = lazy(() => import('@/pages/ArticlesPage'));
const ArticleDetails = lazy(() => import('@/pages/ArticleDetailsPage'));

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: Routes.Main,
    element: (
      <Suspense fallback={<LoaderPage />}>
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: Routes.Profile,
        element: (
          <GuardedRoute>
            <Suspense fallback={<LoaderPage />}>
              <Profile />
            </Suspense>
          </GuardedRoute>
        ),
      },
      {
        path: Routes.Articles,
        element: (
          <Suspense fallback={<LoaderPage />}>
            <Articles />
          </Suspense>
        ),
      },
      {
        path: `${Routes.Articles}/:id`,
        element: (
          <Suspense fallback={<LoaderPage />}>
            <ArticleDetails />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

root.render(
  <StoreProvider>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StoreProvider>,
);
