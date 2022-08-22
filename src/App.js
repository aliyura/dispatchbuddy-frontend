import React, { useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import {
  SignUp,
  Login,
  Homepage,
  Verification,
  ForgotPassword,
  CreateNewPassword,
  ProfilePage,
  UpdatePasswordPage,
  EditProfilePage,
  NotFound,
  RidersLocation, 
  RatingsPage } from "./pages";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthContext} from "./context/AuthProvider";
import { MyDeliveries, SelectRider } from "./components";

function App() {
  const [, dispatch] = useContext(AuthContext);

  useEffect(() => {
    
    dispatch({ type: "LOAD_USER" });
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN) ? (
            <>
              <NotFound />
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route exact path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/my_deliveries" element={<MyDeliveries />} />
      <Route path="/new-password" element={<CreateNewPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/location" element={<RidersLocation />} />
      <Route path="/rate" element={<RatingsPage />} />
      <Route path="/select-rider" element={<SelectRider />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <ProfilePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <ProtectedRoutes>
            <EditProfilePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/change-password"
        element={
          <ProtectedRoutes>
            <UpdatePasswordPage />
          </ProtectedRoutes>
        }
      />       
    </Routes>
  )
}

export default App
