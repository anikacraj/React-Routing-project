import React from 'react'
import UserProfile from '../Components/UserProfile';
import UserOrder from '../Components/UserOrder';
import { Outlet } from 'react-router-dom';
import Signin from '../Pages/Signin';

function ProtectedRoute() {
const isSignIn = true;
return isSignIn ? <Outlet /> : <Signin />

  return (
    <div>



    </div>
  )
}

export default ProtectedRoute