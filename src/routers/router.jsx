import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../views/layouts/DashboardLayout';
import HomePage from '../views/home/HomePage';
import TestPage from '../views/home/TestPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    handle: { title: 'داشبورد' },
    children: [
      {
        index: true,
        handle: { title: 'خانه' },
        element: <HomePage />,
      },
      {
        path: 'test',
        handle: { title: 'test' },
        element: <TestPage />,
      },
    ],
  },
  //   {
  //     path: '*',
  //     handle: { title: '!صفحه پیدا نشد' },
  //     element: <Error404Page />,
  //   },
]);
