import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Main from "./layouts/Main";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        path: "/",
        element: <Home></Home>,
      },
      {
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        path: "/home",
        element: <Home></Home>,
      },
      {
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          );
        },
        path: "/home/:topicId",
        element: 90,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
