/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import Restaurant from "./pages/Restaurant"
import Add from "./pages/Add"
import Search from "./pages/Search"
import Update from './pages/Update'
import Signin from './pages/Signin'
import Signup from './pages/SignUp'
import Logout from './pages/Logout'
import Layout from './components/Layout'
import ProtectedRoute from './pages/ProtectedRoute'
import AdminRoute from './pages/AdminRoute'
import NotAllow from './pages/Notallow'
import Profile from './pages/Profile'


function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Restaurant />} />
          <Route
            path="add"
            element={
              <AdminRoute>
                <Add />
              </AdminRoute>
            }
          />


          <Route path="search" element=
            {<ProtectedRoute>
              <Search />
            </ProtectedRoute>
            } />
          <Route path="NotAllow" element={<NotAllow />} />
          <Route path="Update/:restaurantId" element={<Update />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="update" element={<Update/>} />

        </Route>
      </Routes>





    </BrowserRouter >
  );
}

export default App;

