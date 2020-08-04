import React from 'react';
import { Link } from 'react-router-dom';

export const Resources = () => {
  return (
    <section className='container-resource'>
      <div className='services-inner'>
        <h1 className='x-large'>Resources</h1>
        <h1>We're here to help you!</h1>
        <p className='lead'>
          <br />
          Our curated bundles have the tools, resources, worksheets, and
          checklists to help you build a successful career in tech.{' '}
        </p>
        <div className='buttons'>
          <Link to='/dashboard' className='btn btn-primary'>
            Browse Bundles
          </Link>
          <Link to='/profiles' className='btn btn-primary'>
            Find a Mentor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resources;
