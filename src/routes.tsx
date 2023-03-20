import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';


function Routes() {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Navigate to="/login" />,
      },
      {
         path: '/login',
         element: <Login />,
      },
      {
         path: '/register',
         element: <Register />,
      },
      {
         path: '/home',
         element: <Home />,
      },
      {
         path: '*',
         element: <NotFound />,
      },
   ]);

   return <RouterProvider router={router} />;
}

export default Routes;