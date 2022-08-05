import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";
import CreateNewPasswordStyle from "./CreateNewPassword.style";
// import { AuthContext } from "../context/AuthProvider";
import { reset } from "../../../api";


const initial = {
  // email:"",
  password: "",
  confirmPassword: "",
};

function CreateNewPassword() {
  // const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formComplete = formData.password && formData.confirmPassword;

  const handleSubmit = async(e) => {
  e.preventDefault();
    if (!formComplete) alert("All fields are required");
    if (formData.password !== formData.confirmPassword) alert("Incorrect password")
    else {
            console.log(formData);

      const { data, error } = await reset(formData);
      console.log(formData);
      if (data?.data?.success) {
        // const accessToken = data?.accessToken;
        // setAuth({
        //   password: formData.password,
        //   token: accessToken,
        // });
        console.log(formData);
        alert("Successful");
        return navigate("/");
      } else if (!data?.data?.success) {
        alert(data?.data?.message);
      } else {
        alert(error?.message);
      }
    }  };
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
              name="password"
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              type="password"
              placeholder="Confirm password"
              label="Confirm Password"
              name="confirmPassword"
              formData={formData}
              handleChange={handleChange}
            />
            <Button onClick={handleSubmit}>Reset Password</Button>
          </Form>
        </div>
      </CreateNewPasswordStyle>
    </>
  );
}

export default CreateNewPassword;
