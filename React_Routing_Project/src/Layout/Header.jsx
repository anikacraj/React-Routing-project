import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import '../index.css'

function Header() {

  const [signin,setSignin] = useState(true);
  const navigate =useNavigate();

const handleClick=()=>{
  if(signin){
    localStorage.removeItem('isAuthenticate ')
    setSignin(false);
  }
  else{
    navigate('/signin');
  }
}
return (
  <div>
    <header className="navbar">
    <div className="navbar__brand">
          <Link to="/">MyApp</Link>
        </div>

      <nav className="navbar__links">
        <Link to="/">Home</Link>
        
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link onClick={handleClick} to="#">{signin ? 'Sign Out' : 'Sign In'}</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    
    </header>
    <main>
      <Outlet /> {/* This renders the child routes */}
    </main>
  </div>
);
}
export default Header;
