import React from "react";
import { Button, Form, Logo } from "../../Atoms";
import {Field} from "../../Molecules";
import CreateNewPasswordStyle from "./CreateNewPassword.style";

function CreateNewPassword() {
  const handleSubmit = () => {
    alert("Submitted!");
  };
  return (
    <>
      <CreateNewPasswordStyle>
        <Logo />
        <div className="wrapper">
          <h1>Create new password?</h1>
          <Form>
            <p id="createNewPassword-description">
                Your new password must be different from previous password.
            </p>
            <Field
              type="password"
              placeholder="Enter new password"
              label="New Password"
            />
            <Field
              type="password"
              placeholder="Confirm password"
              label="Confirm Password"
            />
            <Button onClick={handleSubmit}>Reset Password</Button>
          </Form>
        </div>
      </CreateNewPasswordStyle>
    </>
  );
}

export default CreateNewPassword;
