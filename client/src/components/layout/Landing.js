import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <img src='../../img/icon.png' alt='' />
      <div className='landing-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>femBOSS</h1>
          <h1 className='medium'>
            The Professional Network for 
            Women in Tech
          </h1>
          <p className='lead-profile-top'>
            <string> ...ambition begins here.</string>
          </p>
          <div className='buttons'>
            <Link to='/join' className='btn-auth btn-primary'>
              Join
            </Link>
            <Link to='/login' className='btn-auth btn-primary'>
              Log in
            </Link>
          </div>
        </div>
        {/* <div className='landing-two'> */}

        {/* <h1>hello!!</h1>
        </div> */}
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const maoStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(maoStateToProps)(Landing);
