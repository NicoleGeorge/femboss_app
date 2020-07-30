import React from 'react';

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
            <a href='register.html' className='btn btn-primary'>
              Join
            </a>
            <a href='login.html' className='btn btn-light'>
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
