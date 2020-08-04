import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-primary'>
        <i class='fas fa-hat-wizard text-primary icon-dashboard'></i> Edit Profile
      </Link>
      <Link to='/add-experience' class='btn btn-primary'>
        <i class='fas fa-laptop-code text-primary icon-dashboard'></i> Add Experience
      </Link>
      <Link to='/add-education' class='btn btn-primary'>
        <i class='fas fa-user-graduate text-primary icon-dashboard'></i> Add Education
      </Link>
    </div>
  );
};
