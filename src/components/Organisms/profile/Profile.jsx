import React, { useContext } from "react";
import { ProfileStyle } from "./profile.style";
import Avatar_Img from "../../../assets/images/avatar_profile.png";
import {ReactComponent as LockProfile} from "../../../assets/icons/Lock.svg";
import {ReactComponent as Logout} from "../../../assets/icons/logout.svg";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

function Profile() {
  // "name":"Rabiu Aliyu",
  // "country":"Nigeria",
  // "city":"Lagos",
  // "gender":"Male",
  // "dateOfBirth":"02/04/1994"
  const [state, dispatch] = useContext(AuthContext);

  console.log(state);

  const handleLogout = () => {
    // const { data, error } = logout(formData);
    console.log("Yes");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <ProfileStyle>
      <div>
        <div className="header_profile">
          <h1>Profile</h1>
        </div>
        <div className="avatar_wrap">
          <figure>
            <img src={Avatar_Img} alt="avatar img" />
            <figcaption>Rabiu Deyems</figcaption>
            <div className="role">Rider</div>
          </figure>
        </div>
        <div className="list_action">
          <ul className="list_action_tree">
            <li>
              <NavLink to={"/edit-profile"}>
                <span className="edit-img-wrapper">
                  <img src={Avatar_Img} alt="edit icon" />
                </span>
                <span>Edit Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/change-password"}>
                <span className="edit-img-wrapper">
                  {/* <img src={LockProfile} alt="lock icon" /> */}
                  <LockProfile/>
                </span>
                <span>Change Password</span>
              </NavLink>
            </li>
            <li onClick={handleLogout}>
              <div>
                <span className="edit-img-wrapper">
                  {/* <img src={Logout} alt="logout icon" /> */}
                  <Logout/>
                </span>
                <span>Logout</span>
              </div>
            </li>
          </ul>
          <form action="" method="post"></form>
        </div>
      </div>
    </ProfileStyle>
  );
}

export default Profile;
