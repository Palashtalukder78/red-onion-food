import React, { createContext, useEffect, useState } from 'react';
import FoodsContainer from '../FoodsContainer/FoodsContainer';
import Banner from '../Banner/Banner';
import './Home.css';
import ServicesContainer from '../ServicesContainer/ServicesContainer';

export const FoodContext = createContext();
const Home = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    return (
        <FoodContext.Provider value={[foods, setFoods]}>
            <Banner></Banner>
            <FoodsContainer></FoodsContainer>
            <ServicesContainer></ServicesContainer>
        </FoodContext.Provider>
    );
};

export default Home;