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
          <p className='lead-profile'>
          <i className='fas fa-user-astronaut'></i> Join forces, collaborate,
            launch projects!
          </p>
          {/* <div className='form-profile'>
          <div className='form-group'>
          <select name='status' value>
            <option value='0'>Search by technology</option>
            <option value='Html/CSS'>HTML/CSS</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='ReactJS'>ReactJS</option>
            <option value='Vue.js'>Vue.js</option>
            <option value='Bootstrap 5'>Bootstrap 5</option>
            <option value='Node js'>Node js</option>
            <option value='PWA'>PWA</option>
            <option value='Adobe CC'>Adobe CC</option>
          </select>
        </div>
        </div> */}
          {/* <div class='form-profile'>
          <input
            type='text'
            placeholder='Search members'
            name=''
            value=''
          />
        </div> */}

          {<div className="profiles">
            {profiles.length > 0 ? ( profiles.map(profile => (
              profile.user && 
              <ProfileItem key={profile._id} profile={profile}  />
            ))) : <h4>No profiles found</h4>}
          </div>}
        </Fragment>
      )}
      {/* <Fragment>profile</Fragment> */}
      <Link to="/" className="btn btn-primary">
        Back to dashboard
      </Link>
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
