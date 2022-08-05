import React, { useContext, useEffect} from "react";
import { AuthContext } from "../context/AuthProvider";
function Profile() {
    const [state, dispatch] = useContext(AuthContext);
    console.log(state);
  const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      
  };


  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
