import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../index.css'

const Header = () => (
  <div>
    <header className="navbar">
    <div className="navbar__brand">
          <Link to="/">MyApp</Link>
        </div>

      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signin">SignIn</Link>
      </nav>
    
    </header>
    <main>
      <Outlet /> {/* This renders the child routes */}
    </main>
  </div>
);

export default Header;
