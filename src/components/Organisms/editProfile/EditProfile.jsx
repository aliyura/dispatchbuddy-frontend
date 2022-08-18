import React from 'react'
import { Button, Form, Logo } from '../../Atoms'
import { Field } from '../../Molecules'
import EditProfileStyle from './editProfile.style'
import { useNavigate } from 'react-router-dom'

function EditProfile() {
  const handleSubmit = () => {
    alert('Submitted!')
  }

  const navigate = useNavigate()
//   "name":"Rabiu Aliyu",
//   "country":"Nigeria",
//   "city":"Lagos",
//   "gender":"Male",
//   "dateOfBirth":"02/04/1994"
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
            />
            <Field
              type="text"
              placeholder="Enter your country"
              label="Country"
            />
            <Field
              type="text"
              placeholder="Enter your City"
              label="City"
            />
            <Field
              type="text"
              placeholder="Enter your Gender"
              label="Gender"
            />
            <Field
              type="text"
              placeholder="Enter your Date of Birth"
              label="DOB"
            />
            <Button className="update_btn" onClick={handleSubmit}>
              Update Profile
            </Button>
          </Form>
        </div>
      </EditProfileStyle>
    </>
  )
}

export default EditProfile
