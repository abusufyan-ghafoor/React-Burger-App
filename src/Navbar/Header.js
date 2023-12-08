import React from 'react';
import './style.css';

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="burger.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <ul className='nav-list'>
          <li className="nav-button"><a aria-current='true' className='nav-links nav-links-1' href='/'> Burger Builder </a></li>
          <li className="nav-button"><a aria-current='true' className='nav-links' href='/'> Login </a></li>
          {/* <li className="nav-button"><a aria-current='true' className='nav-links'> Logout </a></li>
          <li className="nav-button"><a aria-current='true' className='nav-links'> CHeckout </a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;