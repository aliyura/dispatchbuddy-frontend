import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignUp, Login, Verification } from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
  );
}

export default App;
