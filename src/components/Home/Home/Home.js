import React from 'react';
import FoodsContainer from '../FoodsContainer/FoodsContainer';
import Banner from '../Banner/Banner';

import './Home.css'
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FoodsContainer></FoodsContainer>
        </>
    );
};

export default Home;