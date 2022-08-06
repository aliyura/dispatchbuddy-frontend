import React from "react";
import { Button, Form, Logo } from "../../Atoms";
import {Field} from "../../Molecules";
import LoginStyle from "./Login.style";
import {NavLink} from 'react-router-dom';

function Login() {
  const handleSubmit = () => {
    alert("E don submit!");
  };
  
  return (
    <>
      <LoginStyle>
        <Logo />
        <div className="wrapper">
          <h1>Login</h1>
          <Form>
            <Field label="Email" placeholder="Enter your email" type="email" />
            <Field
              type="password"
              placeholder="Enter your password"
              label="Password"
            />
            <NavLink
              to="/forgot-password"
              className='forgot-password'
            >
              Forgot password?
            </NavLink>
            <Button className="submit_btn" onClick={handleSubmit}>Submit</Button>
          </Form>
          <p id="bottom">
            Don’t have an account? 
            <NavLink to="/signup" className='create_account_link'>
              Create Account
            </NavLink>
            {/* <a href="/signup">Create Account</a> */}
          </p>
        </div>
      </LoginStyle>
    </>
  );
}

export default Login;
