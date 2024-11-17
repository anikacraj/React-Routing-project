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

import ProductsDetails from './Pages/ProductsDetails.jsx';
import Profile from './Components/Profile.jsx';
import UserProfile from './Components/UserProfile.jsx';
import UserOrder from './Components/UserOrder.jsx';
import ProtectedRoute from './Routes/ProtectedRoute.jsx';
import { AdminProfile } from './Components/Admin/AdminProfile.jsx';
import AdminProducts from './Components/Admin/AdminProducts.jsx';
import AdminManagers from './Components/Admin/AdminManagers.jsx';
import AdminCategoris from './Components/Admin/AdminCategoris.jsx';
import AdminRoutes from './Routes/AdminRoutes.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />, // Parent layout
    children: [
      {
        path: '/', // Relative path (no leading slash)
        element: <Products />,
      },
      
     

      {
        path: 'products/:id',
        element: <ProductsDetails />,
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
        path: '/dashboard/user',
        element: <ProtectedRoute />,
        children:[
          {
            path:'profile',
            element:<Profile />
          },
          {
            path:'orders',
            element:<UserOrder />
          }
        ]
      },

      {
        path: '/dashboard/admin',
        element: <AdminRoutes />,
        children:[
          {
            path:'profile',
            element:<AdminProfile />
          },
          {
            path:'products',
            element:<AdminProducts />
          },
          {
            path:'manageUser',
            element:<AdminManagers />
          },   
        
        ]
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
