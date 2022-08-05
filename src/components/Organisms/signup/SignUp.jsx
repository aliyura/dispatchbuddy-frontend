import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";
import SignUpStyle from "./SignUp.style";
import { AuthContext } from "../../../context/AuthProvider";
import { signup } from "../../../api";

const initial = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
};
function SignUp() {
  const { setAuth } = useContext(AuthContext);
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
        // const accessToken = data?.accessToken;
        // setAuth({
        //   user: formData.email,
        //   password: formData.password,
        //   token: accessToken,
        // });
        // console.log(formData);
        console.log(data);
        alert("Successful");
        return navigate("/verification");
      } else if (!data?.data?.success) {
        alert(data?.data?.message);
      } else {
        alert(error?.message);
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

export default SignUp;
