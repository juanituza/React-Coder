import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {




  return (
    <nav className='navbar mb-5'>
      <img className="logo-img" src="../../../public/banner.jpg" alt="banner mk rock" />
      <ul>
        <li>Guitaras</li>
        <li>Nosotros</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar
