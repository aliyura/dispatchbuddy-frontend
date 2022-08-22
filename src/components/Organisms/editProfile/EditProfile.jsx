import React, { useEffect, useState, useCallback } from 'react';
import { Button, Form, Logo } from '../../Atoms';
import { Field } from '../../Molecules';
import EditProfileStyle from './editProfile.style';
import { useNavigate } from 'react-router-dom';
import axios from "../../../api/axios";
import countryData from './CountryData.json';

import { AuthContext } from "../../../context/AuthProvider";
import { updateProfile } from "../../../api";
import swal from "sweetalert";
import { apiPost } from '../../../auth/apiHelper';

const {REACT_APP_AUTH_TOKEN} = process.env;

function EditProfile() {
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDate] = useState('');

  console.log(JSON.parse(localStorage.getItem(REACT_APP_AUTH_TOKEN))?.token, 'collected token');

  const handleSubmit = async (e) => {
    // alert('Submitted!');
    e.preventDefault();
    console.log('values passed',  username, country, city, gender, dob);
    const {data, error} = await updateProfile(username, country, city, gender, dob);
    
    // console.log(response, 'from backend');
    console.log(data, 'from recieved backend');
    // return;

    if (data?.data?.success) {
      swal({
        text: "Profile update Successful",
        icon: "success",
        button: false,
        timer: 3000,
      });
      // setCode("");
      navigate("/profile");
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

  const navigate = useNavigate()
//   "name":"Rabiu Aliyu",
//   "country":"Nigeria",
//   "city":"Lagos",
//   "gender":"Male",
//   "dateOfBirth":"02/04/1994"
  const handleChangeName = (e) => {
    setUsername(e.target.value);
  }
  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  }
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  }

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  }
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  }

  // useEffect(() => {
  //   // handleChangeName();
  //   // handleChangeCountry();
  //   // handleChangeCity();
  //   // handleChangeDate();
  //   // handleSubmit()
  // }, []);

  return (
    <>
      <EditProfileStyle>
        <Logo />
        <div className="wrapper">
          <span className="back_btn" onClick={() => navigate(-1)}>
            &lt; Back
          </span>
          <Form>
            <h1>Update Profile</h1>
            {/* <p id="createNewPassword-description">
                Your new password must be different from previous password.
            </p> */}
            <Field
              type="text"
              placeholder="Enter your name"
              label="Username"
              value={username}
              handleChange={handleChangeName}
            />
            <div className="select_grp">
              <label htmlFor="country">Country</label>
              <select name="country" id="country" className="classic" onChange={handleChangeCountry}>
                {countryData['Africa'].map((item, idx) => <option key={idx} value={item}>{item}</option>)}
              </select>
            </div>
            <Field
              type="text"
              placeholder="Enter your City"
              label="City"
              value={city}
              handleChange={handleChangeCity}
            />
            <div className="select_grp">
              <label htmlFor="city">Gender</label>
              <select name='gender' id='gender' className="classic" onChange={handleChangeGender}>
                <option key={1} value={""}>Gender</option>
                <option key={2} value={"Male"}>Male</option>
                <option key={3} value={"Female"}>Female</option>
              </select>
            </div>
            <Field
              type="date"
              placeholder="Enter your Date of Birth"
              label="DOB"
              handleChange={handleChangeDate}
              value={dob}
            />
            <Button className="update_btn" onClick={(e) => handleSubmit(e)}>
              Update Profile
            </Button>
          </Form>
        </div>
      </EditProfileStyle>
    </>
  )
}

export default EditProfile
