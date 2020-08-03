import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3>{company}</h3>
    <p>
      <Moment format='DD/MM/YY'>{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Current' : <Moment format='DD/MM/YY'>{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <strong>Description: </strong> {description}
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
