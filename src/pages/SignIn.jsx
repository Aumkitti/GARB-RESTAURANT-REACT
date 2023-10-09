/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../service/auth_service';

const SignIn = () => {

    const [restaurant, setRestaurant] = useState({
        name: "",
        type: "",
        image: ""
    })
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setRestaurant((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    }

    const handleSignIn = async () => {
        try {
            const response = await AuthService.post(user.username, user.password);
            navigate("/");         
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }


    return (
        <div className="container">
            <h1>Grab Restaurant</h1>
            <div className="row form">
                <div className="col-6 card justify-content-center">
                    <h5 className='card-header'>Sign Up</h5>
                    <div className="error">{error && "somethingwrong"}</div>
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

export default SignIn