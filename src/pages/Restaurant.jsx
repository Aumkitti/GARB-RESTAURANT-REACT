/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../service/api"
import Card from '../components/Card';
import authHeader from '../service/auth-header';


const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchAllRestaurant = async () => {
            try {
                const res = await api.get(`/restaurants`, config);
                setRestaurants(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllRestaurant();
    }, []);


    console.log(restaurants);
    return (
        <div>
            <h1>Restaurant</h1>
            <div className='row'>
                <div className='restaurants'>
                    {restaurants.map(restaurant => {
                        return (
                            <Card data={restaurant} key={restaurant.id} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
