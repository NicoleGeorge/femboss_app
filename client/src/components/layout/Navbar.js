import React from 'react';

export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='index.html'>
          <i className='fab fa-angellist'></i> femBOSS
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Members</a>
        </li>
        <li>
          <a href='register.html'>Join</a>
        </li>
        <li>
          <a href='login.html'>Log in</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
