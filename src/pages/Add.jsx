import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const Add = () => {
  const [restaurant, setRestaurants] = useState ({
    name:"",
    type:"",
    imageurl:"",
  })
  const navigate = useNavigate();
  const[error, setError] = useState(false);

  const handleChange = (e) =>{
    setRestaurants((perv)=>({...perv, [e.target.name]:e.target.value}));
  }

  const handleClick = async (e) => {
    e.perventDefault();
    try {
      await axios.post ();
      navigate ("/")
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  return (
    <div className="conrainer">
      <h1>Grab Restaurant</h1>
      <div className="row-from">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Add new restaurant</h5>
          <div className=""
          <div className="card-body">
            <from >
              <div className="from-group">
                <label htmlFor="name">Restaurant image url</label>
                <input 
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Restaurant name"
                  onChange={handleChange}
                />
              </div>
              <div className="from-group">
                <label htmlFor="name">Restaurant image url</label>
                <input
                  type="text"
                className="form-control"
                name="type"
                placeholder="Restaurant type"
                onChange={handleChange}
                />
              </div>
              <div className="from-group">
                <label htmlFor="name">Restaurant image url</label>
                <input
                  type="text"
                className="form-control"
                name="imageurl"
                placeholder="Restaurant image"
                onChange={handleChange}
                />
              </div>
              <Link to="" className="btn btn-succes"[onchick]>
                Add
              </Link>
              {" "}
              <Link to="" className="btn btn-danger">
                Cancel
              </Link>
            </from>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Add;