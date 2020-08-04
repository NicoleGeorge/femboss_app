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
      <img src='../../img/logo_tiny.png' alt='' />
      <div className='landing-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>what is femBOSS?</h1>
          <p className='lead'>
            femBOSS is an education, support & social network membership for
            ambitious #WomenInTech. We provide resources and mentorship through
            virtual coworking, newsletters, courses, online networking, and so
            much more. We are unapologetic in our belief that
            #WhatsInYourHeadMatters and unwavering in our support for women who
            are chasing thier dreams by pusuing a career in tech.
            <string> ambition begins here</string>
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
