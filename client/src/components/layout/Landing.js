import React from 'react';
import { Link } from 'react-router-dom';
export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>what is femBOSS?</h1>
          <p className='lead'>
            femBOSS is an education, support & social network membership for
            ambitious #WomenInTech. We provide resources and mentorship through
            virtual coworking, newsletters, courses, online networking, and so
            much more. We are unapologetic in our belief that
            #WhatsInYourHeadMatters and unwavering in our support for women who
            are chasing thier dreams by pusuing a career in tech.
          </p>
          <div className='buttons'>
            <Link to='/join' className='btn btn-primary'>
              Join
            </Link>
            <Link to='/login' className='btn btn-primary'>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
