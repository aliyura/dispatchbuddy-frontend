import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import RiderRequestFormStyle from './RiderRequestForm.style';
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";

function RiderRequestForm({id}) {
    const initialState = {

    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = () => {

    }
    
    const handleSubmit = () => {

    }



    return (
        <RiderRequestFormStyle>
            <div className="wrapper">
                <Form>
                    <Field
                        type="text"
                        placeholder="Enter your Fullname"
                        label="Full name"
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
                        type="text"
                        placeholder="Enter your mobile number"
                        label="Mobile number"
                        name="mobileNumber"
                        formData={formData}
                        handleChange={handleChange}
                    />
                    {/* <NavLink
                    to="/select-rider"
                    className='forgot-password'
                    >
                    Cancel
                    </NavLink> */}
                    <Button className="submit_btn" onClick={handleSubmit}>Submit</Button>
                </Form>
                <p id="bottom">
                    Not interested again?
                    <NavLink to="/select-rider" className='create_account_link'>
                        Cancel
                    </NavLink>
                    {/* <a href="/signup">Create Account</a> */}
                </p>
            </div>
        </RiderRequestFormStyle>
    )
}

export default RiderRequestForm