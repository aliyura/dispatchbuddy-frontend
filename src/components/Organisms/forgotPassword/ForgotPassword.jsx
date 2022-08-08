import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";
import ForgotPasswordStyle from "./ForgotPassword.style";
import { AuthContext } from "../../../context/AuthProvider";
import { validate } from "../../../api";
import swal from "sweetalert";

const initial = {
  email:""
};

function ForgotPassword() {
  const [, dispatch] = useContext(AuthContext);
    const navigate = useNavigate();
  // let { username } = state;
  const [formData, setFormData] = useState(initial);
 const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value,
   });
 };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.email) alert("All fields are required")
    else {
      // console.log(formData);
      const { data, error } = await validate(formData.email);
      // console.log(formData);
      if (data?.data?.success) {
        console.log(formData);
        dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: formData.email });
        swal({
          text: "An OTP has been sent to your email",
          icon: "success",
          button: false,
          timer: 3000,
        });
         setTimeout(() => {
         return navigate("/");
        }, 3000);;
      } else if (!data?.data?.success) {
        swal("Oops", data?.data?.message, "error", {
          button: false,
          timer: 3000,
        });
      } else {
        swal("Oops", error, "error", {
          button: false,
          timer: 3000,
        });
      }
    }
  }
  return (
    <>
      <ForgotPasswordStyle>
        <Logo />
        <div className="wrapper">
          <h1>Forgot Password?</h1>
          <Form>
            <p id="forgotpassword-description">
              Enter the email or password associated with your account and we'll
              send an email with instructions to reset your password.
            </p>
            <Field
              label="Email or Phone Number"
              placeholder="Email or Phone Number"
              type="email"
              name="email"
              formData={formData}
              handleChange={handleChange}
            />
            <Button onClick={handleSubmit}>Send</Button>
          </Form>
        </div>
      </ForgotPasswordStyle>
    </>
  );
}

export default ForgotPassword;
