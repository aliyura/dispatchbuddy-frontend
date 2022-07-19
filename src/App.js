import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignUp, Login, ForgotPassword} from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />      
    </Routes>
  );
}

export default App;
