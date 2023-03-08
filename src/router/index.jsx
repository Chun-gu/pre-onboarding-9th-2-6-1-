import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from '../components';
import { ErrorPage, MainPage, ReservationsPage } from '../pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/main" />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/main',
      element: (
        <Layout>
          <MainPage />
        </Layout>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/reservations',
      element: (
        <Layout>
          <ReservationsPage />
        </Layout>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
