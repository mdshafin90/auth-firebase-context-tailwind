import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import Orders from './components/Orders/Orders.jsx';
import Profile from './components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
