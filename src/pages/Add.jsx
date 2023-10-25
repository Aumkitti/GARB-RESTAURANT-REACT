/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from "../service/api";

const Add = () => {
  const [restaurant, setRestaurants] = useState({
    name: "",
    type: "",
    image: ""
  })
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChage = (e) => {
    setRestaurants((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/restaurants`, restaurant);
      navigate("/")
    } catch (error) {
      console.error(error);
      setError(true)
    }
  }
  const handleClear = () => {
    setRestaurants({
      name: "",
      type: "",
      image: "",
    })
    setError(false);
  }
  return (
    <div className="container">
      <h1>Grab Restaurant</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Add new restaurant</h5>
          <div className="card-body"></div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Restaurant name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Restaurant name"
                onChange={handleChage}
                value={restaurant.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Restaurant type</label>
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="Restaurant type"
                onChange={handleChage}
                value={restaurant.type} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Restaurant imageurl</label>
              <input
                type="text"
                className="form-control"
                name="image"
                placeholder="Restaurant image"
                onChange={handleChage}
                value={restaurant.image} />
            </div>
            <br />
            <Link to="" className="btn btn-success" onClick={handleClick}>
              Add
            </Link>
            <Link to="/" className="btn btn-danger" onClick={handleClear}>
              cansel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add