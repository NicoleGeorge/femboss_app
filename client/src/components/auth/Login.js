import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

 const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // destructure the state

  const { email, password } = formData;

  //   update the name, use the spread operator to copy formData, change name to the value of the input
  const onChange = (e) =>
    //   [e.target.name] => using this as a key, so I can use the onChange for every inpout field
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // function so the submit form doesn't refresh
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('successfully logged in');
  };

  return (
    <Fragment>
      <section className='join-hero'>
        <h1 className='large text-primary '>Login</h1>
        <p className='lead'>
        <i class="fas fa-hand-sparkles"></i> Hi, welcome back!
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              vale={email}
              onChange={(e) => onChange(e)}
              required
            />
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
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
        <p className='my-1'>
          Not a femBOSS member? <Link to='/join'>Join us!</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
