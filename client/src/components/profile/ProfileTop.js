import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    socials,
    user: { name, avatar },
  },
}) => {
  return (
    <div className='profile-top p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'>{name}</h1>
      <p className='lead-profile-top'>
        {status}, {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x'></i>
          </a>
        )}
        {socials && socials.twitter && (
          <a href={socials.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        )}

        {socials && socials.facebook && (
          <a href={socials.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        )}
        {socials && socials.linkedin && (
          <a href={socials.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        )}
        {socials && socials.youtube && (
          <a href={socials.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        )}
        {socials && socials.instagram && (
          <a href={socials.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        )}
      </div>
      <div>
        <Link to='/' className='btn my-1 btn-connect'>
          <i className='fas fa-award'></i> Admire
        </Link>
        <Link to='/' className='btn my-1 btn-connect'>
          <i className='fas fa-hand-sparkles'></i> Connect
        </Link>
      </div>
      <div>
        <Link to='/' className='btn my-1 btn-connect'>
          <i className='fas fa-copy'></i> Copy URL
        </Link>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired,
};

export default ProfileTop;
