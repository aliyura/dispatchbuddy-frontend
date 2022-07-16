import React from "react";
import { Button, Form, Logo } from "../../Atoms";
import Field from "../../Molecules";
import LoginStyle from "./Login.style";

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
            <a href="www" id="forgot-password">Forgot password?</a>
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
          <p id="bottom">
            Don’t have an account? <a href="www">Create Account</a>
          </p>
        </div>
      </LoginStyle>
    </>
  );
}

export default Login;
