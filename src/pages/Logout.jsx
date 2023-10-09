/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../service/auth_service';

export const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        AuthService.logout();
        navigate("/");
    };

    setTimeout(()=>{
        handleLogout();
    },3 * 1000);
  return <div>Logout</div>;
};

export default Logout;
