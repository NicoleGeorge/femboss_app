import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <i class='fas fa-hat-wizard text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-experience' class='btn btn-light'>
        <i class='fas fa-laptop-code text-primary'></i> Add Experience
      </Link>
      <Link to='/add-education' class='btn btn-light'>
        <i class='fas fa-user-graduate text-primary'></i> Add Education
      </Link>
    </div>
  );
};
