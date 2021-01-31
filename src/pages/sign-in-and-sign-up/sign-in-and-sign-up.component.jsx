import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component.jsx';

import SignUP from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';


const SignInandSignUpPage = () => (
  <div className='sign-in-and-sign-up'> 
  <SignIn/>
  <SignUP/>
  </div>
);

export default SignInandSignUpPage;