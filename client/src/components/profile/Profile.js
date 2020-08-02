import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-primary'>
            Back to Members
          </Link>

          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user.id === profile.user.id && (
              <Link to='/edit-dashboard' className='btn btn-dark'>
                Edit profile
              </Link>
            )}

          <div className='profile-edu bg-white p-2'>
            <h2 className='text-primary'>Education</h2>
            {/* {profile.education.length > 0 ? (
              <Fragment>
                {profile.education.map((education) => (
                  <ProfileEducation key={education._id} education={education} />
                ))}
              </Fragment>
            ) : (
              <h4>No education credentials</h4>
            )} */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
