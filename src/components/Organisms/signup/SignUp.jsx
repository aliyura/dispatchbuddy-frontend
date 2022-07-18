import React from 'react'
import { Button, Form, Logo } from "../../Atoms";
import Field from "../../Molecules";
import SignUpStyle from "./SignUp.style";

function SignUp() {
  const handleSubmit = () => {
    alert("E don submit!");
  };
  return (
    <>
      <SignUpStyle>
        <Logo />
        <div className="wrapper">
          <h1>Create an account</h1>
          <Form>
            <Field label="Full Name" placeholder="Enter your full name" type="text" />
            <Field label="Email" placeholder="Enter your email" type="email" />
            <Field label="Phone Number" placeholder="Enter your phone number" type="number" />
            <Field
              type="password"
              placeholder="Enter your password"
              label="Password"
            />
            <Button onClick={handleSubmit}>Sign Up</Button>
          </Form>
          <p id="bottom">
            Already have an account? <a href="www">Login</a>
          </p>
        </div>
      </SignUpStyle>
    </>
  );
}

export default SignUp