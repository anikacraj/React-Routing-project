import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

import Header from './Layout/Header.jsx';
import Signin from './Pages/Signin.jsx';
import Profile from './Pages/Profile.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />, // Parent layout
    children: [
      {
        path: '/', // Relative path (no leading slash)
        element: <Home />,
      },
      
     
      {
        path: 'products', // Relative path (no leading slash)
        element: <Products />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
    ],
  },
  {
    path: '*', // Catch-all route for 404 errors
    element: <ErrorPage />,
  },
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
