import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";
import SignUpStyle from "./SignUp.style";
import {NavLink} from 'react-router-dom';
import { signup } from "../../../api";
import swal from "sweetalert";

const initial = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
};
function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formComplete = formData.email && formData.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formComplete) alert("All fields are required");
    else {
      const { data, error } = await signup(formData);
      console.log(formData);
      if (data?.data?.success) {
        console.log(data);
        swal({
          text: "Login was Successful",
          icon: "success",
          button: false,
          timer: 3000,
        });
        return navigate("/verification");
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
  };

  return (
    <>
      <SignUpStyle>
        <Logo />
        <div className="wrapper">
          <h1>Create an account</h1>
          <Form>
            <Field
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              name="name"
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              label="Phone Number"
              placeholder="Enter your phone number"
              type="number"
              name="phoneNumber"
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              type="password"
              placeholder="Enter your password"
              label="Password"
              name="password"
              formData={formData}
              handleChange={handleChange}
            />
            <Button className='submit_btn' onClick={handleSubmit}>Sign Up</Button>
          </Form>
          <p id="bottom">
            Already have an account? 
            <NavLink to="/login" className='login_link'>
             Login
            </NavLink>
          </p>
        </div>
      </SignUpStyle>
    </>
  );
}

export default SignUp;
