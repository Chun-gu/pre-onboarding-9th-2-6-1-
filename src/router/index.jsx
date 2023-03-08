import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

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
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/reservations',
      element: <ReservationsPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
