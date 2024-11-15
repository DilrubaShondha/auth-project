import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import App from './App.jsx';
import Root from './Component/Root.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Order from './Component/Order.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/order",
          element:<PrivateRoute><Order></Order></PrivateRoute>,
        },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true, // Add this flag here
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
