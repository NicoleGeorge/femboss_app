import React from 'react';
import { Link } from 'react-router-dom';

export const VirtualCoworking = () => {
  return (
    <section className='container-service'>
      <div className='services-inner'>
        <h1 className='x-large'><i className='fas fa-video'></i>{' '}Virtual <br/>CoWorking</h1>
        <h1>Ready to plan a coding session?</h1>
        <p className='lead'>
          At femBOSS we are all about collaborative learning. Whether you’re
          just starting to code, launching a business, figuring out the
          freelancer life, or cultivating the tech career of your dreams, work
          alongside femBOSS community members and reach your full potential.
        </p>
        <div className='buttons'>
          <Link to='/dashboard' className='btn btn-primary'>
            Schedule a Session
          </Link>
          <Link to='/profiles' className='btn btn-primary'>
            Find a Mentor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VirtualCoworking;
