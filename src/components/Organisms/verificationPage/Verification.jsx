import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Form, Logo } from "../../Atoms";

import LoginStyle from "../login/Login.style";

function Verification() {
  function handleResend() {
    alert("Reset");
  }
  const [code, setCode] = useState("");
  if (code.toString().length === 4) setTimeout(() => alert("send"), 5);
  const handleChange = (code) => setCode(code);
  return (
      <LoginStyle>
        <Logo />
        <div className="wrapper">
          <h1>Verification</h1>
          <Form>
            <p id="verification-description">
              We’ve sent an OTP code to your email. Please check your email.
            </p>

            {/* <Field label="OTP" placeholder="Enter your OTP" type="text" />
            <Button onClick={handleSubmit}>Submit</Button> */}
            <OtpInput
              value={code}
              onChange={handleChange}
              numInputs={4}
              separator={<span style={{ width: ".8rem" }}></span>}
              isInputNum={true}
              shouldAutoFocus={true}
              inputStyle={{
                fontSize: "0.75rem",
                color: "#21334f",
                fontWeight: "400",
                caretColor: "#580AFF",
                width: "3.125rem",
                height: "3.125rem",
                background: "#FFFFFF",
                border: "1px solid rgba(0, 0, 0, 0.24)",
                borderRadius: "4px",
              }}
              focusStyle={{
                border: "1px solid #580AFF",
                outline: "none",
              }}
            />
          </Form>
          <p id="bottom">
            Didn’t receive OTP? <span onClick={handleResend}>Resend Code</span>
          </p>
        </div>
      </LoginStyle>
  );
}

export default Verification;
