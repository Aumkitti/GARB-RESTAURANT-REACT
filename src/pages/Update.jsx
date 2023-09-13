import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

const Update = () => {
    const [restaurant, setRestaurants] = useState({
        name: "",
        type: "",
        imageurl: "",
    })
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const {restaurantId} = useParams();