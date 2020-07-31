import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

// import axios from 'axios';

const Join = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // destructure the state

  const { name, email, password, passwordConfirm } = formData;

  //   update the name, use the spread operator to copy formData, change name to the value of the input
  const onChange = (e) =>
    //   [e.target.name] => using this as a key, so I can use the onChange for every inpout field
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // function so the submit form doesn't refresh
  const onSubmit = async (e) => {
    e.preventDefault();

    // validating paswords => making sure they both match

    if (password !== passwordConfirm) {
      setAlert('passwords do not match', 'danger');
    } else {
      console.log('successfully logged in');
      // can successfully access the backend database!!

      //   const newUser = {
      //     name,
      //     email,
      //     password,
      //   };
      //   try {
      //     const config = {
      //       headers: {
      //         'Content-type': 'application/json'
      //       }
      //     }
      //     const body = JSON.stringify(newUser);
      //     const res = await axios.post('/api/users', body, config);
      //     console.log(res.data);
      //   } catch (error) {
      //     console.error(error.response.data);
      //   }
    } // }
  };

  return (
    <Fragment>
      <section className='join-hero'>
        <h1 className='large text-primary '>Join</h1>
        <p className='lead'>
          <i className='fas fa-magic'></i> Create Your Account
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              vale={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              vale={email}
              onChange={(e) => onChange(e)}
              required
            />
            <small className='form-text'>
              For a profile image, use a Gravatar email.
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              vale={password}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='passwordConfirm'
              value={passwordConfirm}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Join' />
        </form>
        <p className='my-1'>
          Already a femBOS member? <Link to='/login'>login</Link>
        </p>
      </section>
    </Fragment>
  );
};

Join.propTypes = {
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { setAlert })(Join);
