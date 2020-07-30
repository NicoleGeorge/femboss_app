import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fab fa-angellist'></i> femBOSS
        </Link>
      </h1>
      <ul>
        <li>
          <a href='!#'>Members</a>
        </li>
        <li>
          <Link to='/join'>Join</Link>
        </li>
        <li>
          <Link to='/login'>Log in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
