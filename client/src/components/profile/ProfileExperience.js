import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3>{company}</h3>
    <p>
      <Moment format='DD/MM/YY'>{from}</Moment> -{' '}
      {!to ? ' Current' : <Moment format='DD/MM/YY'>{to}</Moment>}
    </p>
    <p>
        <strong>Position: </strong> {title}
    </p>
    <strong>Description: </strong> {description}
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
