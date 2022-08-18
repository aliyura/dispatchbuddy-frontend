import { Navigate } from "react-router-dom";
const { REACT_APP_AUTH_TOKEN } = process.env;

function ProtectedRoutes({ children }) {
  const token = localStorage.getItem(REACT_APP_AUTH_TOKEN) ;
  // console.log(token, "ffffffffff");
  // console.log("reach here ooooo");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};



export default ProtectedRoutes



