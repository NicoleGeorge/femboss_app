import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h3>{school}</h3>
    <p>
      <Moment format='DD/MM/YY'>{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Current' : <Moment format='DD/MM/YY'>{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Accreditation: </strong> {degree}
    </p>
    <p>
      <strong>Field of Study: </strong> {fieldofstudy}
    </p>
    <strong>Description: </strong> {description}
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
