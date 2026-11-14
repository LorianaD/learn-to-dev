import { createHashRouter } from 'react-router';
import { Layout } from './components';
import { CategoryPage, CoursePage, HomePage, NotFoundPage } from './pages';

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'categories/:slug',
          element: <CategoryPage />,
        },
        {
          path: 'cours/:slug',
          element: <CoursePage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
);