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
  MyDeliveries,
  NotFound,
  RidersLocation, 
  RatingsPage } from "./pages";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthContext, AuthProvider } from "./context/AuthProvider";
import { SelectRider } from "./components";

function App() {
  // const [state, dispatch] = useContext(AuthContext);

  // useEffect(() => {
    
  //   dispatch({ type: "LOAD_USER" });
  // }, [dispatch]);

  return (
    <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          localStorage.getItem('token') ? (
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
      <Route path="/new-password" element={<CreateNewPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/location" element={
        <ProtectedRoutes>
          <RidersLocation />
        </ProtectedRoutes>
      } />
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
        path="/my_deliveries"
        element={
          <ProtectedRoutes>
            <MyDeliveries />
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
    </AuthProvider>
  );
}

export default App
