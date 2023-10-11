/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import Restaurant from "./pages/Restaurant"
import Add from "./pages/Add"
import Search from "./pages/Search"
import Update from './pages/Update'
import SignUp from './pages/Signup'
import SignIn from './pages/Signin'
import Logout from './pages/Logout'
import Layout from './components/Layout'
import ProtectedRoute from './pages/ProtectedRoute'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route>
          <Route path="/" element={<Layout/>} />
          <Route path="/" element={<Restaurant />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
          <Route path="/update/:restaurantId" element={<Update />} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/signUp" element={<SignUp />} /> 
          
          </Route>         
        </Routes>
    </BrowserRouter>
  )
}

export default App;

