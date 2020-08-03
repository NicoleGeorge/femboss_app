import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation= ({
  experience: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h3>{school}</h3>
    <p>
      <Moment format='DD/MM/YY'>{from}</Moment> -{' '}
      {!to ? ' Current' : <Moment format='DD/MM/YY'>{to}</Moment>}
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
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
