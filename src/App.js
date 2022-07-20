import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignUp, Login, Homepage } from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
