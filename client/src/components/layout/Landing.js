import React from 'react';
import { Link } from 'react-router-dom';
export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>what is femBOSS?</h1>
          <p className='lead'>
            femBOSS is a social network for ambitious #womenInTech.
          </p>
          <div className='buttons'>
            <Link to='/join' className='btn btn-primary'>
              Join
            </Link>
            <Link to='/login' className='btn btn-light'>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
