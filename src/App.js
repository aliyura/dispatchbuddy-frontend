import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { MyDeliveries } from './components'
import {
  SignUp,
  Login,
  Homepage,
  Verification,
  ForgotPassword,
  CreateNewPassword,
  ProfilePage,
  UpdatePasswordPage,
  EditProfilePage
} from './pages'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password" element={<UpdatePasswordPage />} />
      <Route path="/new-password" element={<CreateNewPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/my_deliveries" element={<MyDeliveries />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
    </Routes>
  )
}

export default App
