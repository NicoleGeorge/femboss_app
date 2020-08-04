import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link className='btn btn-nav btn-nav-member' to='/profiles'>
          <i class='fas fa-code-branch'></i>
          <span className='hide-sm'> Members</span>
        </Link>
      </li>
      <li>
        <Link className='btn btn-nav btn-nav-member' to='/posts'>
          <i className='fas fa-comments'></i>{' '}
          <span className='hide-sm'> Forum</span>
        </Link>
      </li>
      <li>
        <Link className='btn btn-nav btn-nav-member' to='/virtual-coworking'>
          <i className='fas fa-video'></i>{' '}
          <span className='hide-sm'> Virtual CoWorking</span>
        </Link>
      </li>
      <li>
        <Link className='btn btn-nav btn-nav-member' to='/resources'>
          <i class='fas fa-link'></i>
          <span className='hide-sm'> Resources</span>
        </Link>
      </li>
      <li>
        <Link className='btn btn-nav btn-nav-member' to='/dashboard'>
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
      {/* made viewing Members only accissible to logged in users */}
      {/* <li>
        <Link className='btn btn-nav btn-nav-member' to='/profiles'>
          Members
        </Link>
      </li> */}
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
