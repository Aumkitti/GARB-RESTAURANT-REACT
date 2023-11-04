/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../service/api"
import Card from '../components/Card';
import authHeader from '../service/auth-header';
import loading from '../components/loading';
import * as loadingData from "../loading/loading.json"


const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        const fetchAllRestaurant = async () => {
            try {
                const res = await api.get(`/restaurants`, config);
                setRestaurants(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        setloading(true);
        fetchAllRestaurant();
    }, []);

    const handDelete = async (id) =>{
        try {
            await api.delete(`/restaurants/${id}`, config);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            
            <h1>Restaurant</h1>
            <div className='row'>
                {
                    !loading ? (<div className='restaurants'>
                    {restaurants.map(restaurant => {
                        return (
                            <Card data={restaurant} key={restaurant.id} />
                        );
                    })}
                </div>) : (<loading animation={loadingData}/>)
                }            
            </div>
        </div>
    );
};

export default Restaurant;
