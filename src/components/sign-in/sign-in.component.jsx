import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import {
  googleSignInStart,
  eamilSignInStart,
} from '../../redux/user/user.action';

const SignIn = ({ eamilSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    eamilSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="Sing-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          required
          value={email}
          handleChange={handleChange}
          label="eamil"
        />

        <FormInput
          type="password"
          name="password"
          required
          value={password}
          handleChange={handleChange}
          label="password"
        />

        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            SIGN IN
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {' '}
            Sign With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  eamilSignInStart: (email, password) =>
    dispatch(eamilSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
