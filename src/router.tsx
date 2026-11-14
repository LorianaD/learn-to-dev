import { createBrowserRouter } from 'react-router';
import { Layout } from './components';
import { CategoryPage, CoursePage, HomePage, NotFoundPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,          // structure commune : sidebar + contenu
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'categories/:slug', element: <CategoryPage /> },
      { path: 'cours/:slug', element: <CoursePage /> },     // "/cours/nestjs"
      { path: '*', element: <NotFoundPage /> },             // toute autre URL
    ],
  },
]);