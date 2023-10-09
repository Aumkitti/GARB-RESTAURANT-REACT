/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../service/auth_service';

const SignUp = () => {

    const [restaurant, setRestaurant] = useState({
        name: "",
        type: "",
        image: ""
    })
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({ message: ""});
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleRestaurantChange = (e) => {
        setRestaurant((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClear = (e) => {
        setUser({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
        setError(false);
    };
    const handleClick = async (e) => {
        e.preventDeFault();
        try{
            if (user.confirmPassword === user.password) {
                const register = await AuthService.register(
                    user.username,
                    user.email,
                    user.password
                );
                navigate("/singIn");
            } else {
                setError(true);
                setErrorMessage({ message: "Failed! Password mismatched!"});
            }
        } catch (error) {
            console.error(error);
            setError(true);
            setErrorMessage(error.response.data);
        }
    };

    return (
        <div className="container">
            <h1>Grab Restaurant</h1>
            <div className="row form">
                <div className="col-6 card justify-content-center">
                    <h5 className='card-header'>Register a new User</h5>
                    <div className="error">{error && errorMessage.message}</div>
                    <div className="card-body">

                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="name"
                                    placeholder='Username'
                                    onChange={handleChange}
                                    value={restaurant.name} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="type">Email</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="type"
                                    placeholder='Email'
                                    onChange={handleChange}
                                    value={restaurant.type} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="image">Password</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="image"
                                    placeholder='Password'
                                    onChange={handleChange}
                                    value={restaurant.image} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Confirmpassword</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="image"
                                    placeholder='Confirmpassword'
                                    onChange={handleChange}
                                    value={restaurant.image} />
                            </div>

                            <Link to="" className='btn btn-success' >
                                sing up
                            </Link>
                            <Link to="/" className='btn btn-danger' >
                                Cancel
                            </Link>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp