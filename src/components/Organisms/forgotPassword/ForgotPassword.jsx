import React from "react";
import { Button, Form, Logo } from "../../Atoms";
import Field from "../../Molecules";
import ForgotPasswordStyle from "./ForgotPassword.style";

function ForgotPassword() {
  const handleSubmit = () => {
    alert("E don submit!");
  };
  return (
    <>
      <ForgotPasswordStyle>
        <Logo />
        <div className="wrapper">
          <h1>Forgot Password?</h1>
          <p>Enter the email or password associated with your account<br/>and we'll send an email with instructions to reset your password</p>
          <Form>
            <Field label="Email or Phone Number" placeholder="Email or Phone Number" type="email" />
            <Button onClick={handleSubmit}>Send</Button>
          </Form>
        </div>
      </ForgotPasswordStyle>
    </>
  );
}

export default ForgotPassword;
