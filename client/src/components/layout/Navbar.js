import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className='navbar nav-primary'>
      <h1 className="navbar-logo">
        <Link to='/'>
          <i className='fab fa-angellist'></i> femBOSS
        </Link>
      </h1>
      <ul>
        <li>
          <Link className='btn btn-nav btn-nav-member' to='!#'>Members</Link>
        </li>
        <li>
          <Link className='btn btn-nav' to='/join'>Join</Link>
        </li>
        <li>
          <Link className='btn btn-nav' to='/login'>Log in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
