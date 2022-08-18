import React from 'react'
import { Button, Form, Logo } from '../../Atoms'
import { Field } from '../../Molecules'
import UpdatePasswordStyle from './updatePassword.style'
import { useNavigate } from 'react-router-dom'

function UpdatePassword() {
  const handleSubmit = () => {
    alert('Submitted!')
  }

  const navigate = useNavigate()

  return (
    <>
      <UpdatePasswordStyle>
        <Logo />
        <div className="wrapper">
          <span className="back_btn" onClick={() => navigate(-1)}>
            &lt; Back
          </span>
          <Form>
            <h1>Update password</h1>
            {/* <p id="createNewPassword-description">
                Your new password must be different from previous password.
            </p> */}
            <Field
              type="password"
              placeholder="Enter Old password"
              label="Old Password"
            />
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
            <Button className="update_btn" onClick={handleSubmit}>
              Update Password
            </Button>
          </Form>
        </div>
      </UpdatePasswordStyle>
    </>
  )
}

export default UpdatePassword
