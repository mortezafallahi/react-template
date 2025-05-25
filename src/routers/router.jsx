import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../views/layouts/DashboardLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    handle: { title: 'داشبورد' },
    children: [
      //   {
      //     index: true,
      //     path: '/',
      //     element: <Dashboard />,
      //   },
    ],
  },
  //   {
  //     path: '*',
  //     handle: { title: '!صفحه پیدا نشد' },
  //     element: <Error404Page />,
  //   },
]);
