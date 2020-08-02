import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import { Link } from 'react-router-dom';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Members</h1>
          <p className='lead'>
          <i className='fas fa-user-astronaut'></i> Join forces, collaborate &
            launch projects!
          </p>
          <Link to="/" className="btn btn-primary">
        Back to dashboard
      </Link>
          <div className="profiles">
            {profiles.length > 0 ? ( profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile}  />
            ))) : <h4>No profiles found</h4>}
          </div>
        </Fragment>
      )}
      <Fragment>profile</Fragment>
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
