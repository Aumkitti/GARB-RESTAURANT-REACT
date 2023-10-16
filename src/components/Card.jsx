/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React from 'react'
import Update from "../pages/Update";


const Card = ({ restaurant, handelDelete }) => {


  return (
    <div className="card" style={{ width: "18rem" }} key={restaurant.id}>
      <img src={restaurant.image} alt="" className='card-img-top' />
      <div className="card-body">
        <h5 className='title'>{restaurant.name}</h5>
        <p className="card-text">{restaurant.type}</p>
        
        {user && user.roles.includes("ROLES_ADMIN") && (
          <>
         
        <Link to="" className='btn btn-danger px-2' onClick={() => {
          handelDelete(restaurant.id);
        }}>
          Delete
        </Link>
        
        
        
        <Link to={`/Update/${restaurant.id}`} className='btn btn-warning px-2'>
          Edit
        </Link>
        </>
        )}
      </div>
    </div>
  )
}

export default Card;