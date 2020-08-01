import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link className='btn btn-nav btn-nav-member' to='dashboard'>
          <i className='fas fa-user-astronaut'></i>
          {''}
          <span className='hide-sm'> Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} className='btn btn-nav btn-nav-member' to='#!'>
          <i className='fas fa-sign-out-alt'></i>
          {''}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className='btn btn-nav btn-nav-member' to='#!'>
          Members
        </Link>
      </li>
      <li>
        <Link className='btn btn-nav' to='/join'>
          Join
        </Link>
      </li>
      <li>
        <Link className='btn btn-nav' to='/login'>
          Log in
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar nav-primary'>
      <h1 className='navbar-logo'>
        <Link to='/'>
          <i className='fab fa-angellist'></i> femBOSS
        </Link>
      </h1>
      {/* { !loading ? '' : null} */}
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
