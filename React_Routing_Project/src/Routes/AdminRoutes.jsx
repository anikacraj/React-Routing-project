import React from 'react'
import { Outlet } from 'react-router-dom';
import Signin from '../Pages/Signin';

function AdminRoutes() {
    const isAdminSignIn = false;
    const isAdmin = true;
    return isAdminSignIn && isAdmin ? <Outlet /> : <Signin />
  return (
    <div>


    </div>
  )
}

export default AdminRoutes