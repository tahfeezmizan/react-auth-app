import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './components/Header/Home.jsx';
import Login from './components/Header/Login.jsx';
import Register from './components/Header/Register.jsx';
import './index.css';
import Root from './Root/Root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Home></Home>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
