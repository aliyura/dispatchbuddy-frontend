import React from 'react'
import {ProfileStyle} from './profile.style';
import Avatar_Img from '../../../assets/images/avatar_profile.png';
import EditProfile from '../../../assets/images/profile.png';
import LockProfile from '../../../assets/images/lock.png';
import Logout from '../../../assets/images/logout_icon.png';
import {NavLink} from 'react-router-dom';

function Profile (){
    // "name":"Rabiu Aliyu",
    // "country":"Nigeria",
    // "city":"Lagos",
    // "gender":"Male",
    // "dateOfBirth":"02/04/1994"

  return (
    <div>
        <ProfileStyle>
            <div className='header_profile'>
                <h1>Profile</h1>
            </div>
            <div className="avatar_wrap">
                <figure>
                    <img src={Avatar_Img} alt="avatar img" />
                    <figcaption>
                        Kelechi Okoli
                    </figcaption>
                    <div className="role">Rider</div>
                </figure>
            </div>
            <div className="list_action">
                <ul className='list_action_tree'>
                    <li>
                    <NavLink to={'/edit-profile'}>
                        <span><img src={EditProfile} alt="edit icon" /></span>
                        <span>Edit Profile</span>
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/change-password'}>
                            <span>
                                <img src={LockProfile} alt="lock icon" />
                            </span>
                            <span>Change Password</span>
                        </NavLink>
                    </li>
                    <li>
                        <span>
                            <img src={Logout} alt="logout icon" />
                        </span>
                        <span>Logout</span>
                    </li>
                </ul>
                <form action="" method="post">

                </form>
            </div>
        </ProfileStyle>
    </div>
  )
}


export default Profile;