import React from "react";
import { Button, Form, Logo } from "../../Atoms";
import Field from "../../Molecules";
import LoginStyle from "../login/Login.style";

function Verification() {
  const handleSubmit = () => {
    alert("E don submit!");
  };
  return (
    <>
      <LoginStyle>
        <Logo />
        <div className="wrapper">
          <h1>Verification</h1>
          <Form>
            <Field label="OTP" placeholder="Enter your OTP" type="text" />
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
          <p id="bottom">
            Didn’t get the OTP? <a href="www">Click to resend OTP</a>
          </p>
        </div>
      </LoginStyle>
    </>
  );
}

export default Verification;
