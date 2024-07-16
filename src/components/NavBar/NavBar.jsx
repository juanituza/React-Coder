import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {




  return (
    <nav className="navbar mb-5">
      <img className="logo-img col-3 mb-3 ms-0" src="/banner.jpg" alt="banner mk rock" />
      <ul className="text-center col-3">
        <li>Productos</li>
        <li>Nosotros</li>
      </ul>
      <CartWidget className="col-4"/>
    </nav>
  );
}

export default NavBar
