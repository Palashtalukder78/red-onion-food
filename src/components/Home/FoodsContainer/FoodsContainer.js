import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './FoodsContainer.css';
import useFood from '../../../hooks/useFood';
import Food from '../Food/Food';

const FoodsContainer = () => {
    const { foods } = useFood();
    const [selectedFoods, setSelectedFoods] = useState([]);
    useEffect(() => {
        const allFoods = [...foods];
        const homeFoods = allFoods.filter(food => food.category === 'dinner')
        setSelectedFoods(homeFoods);
    }, [foods])

    const handleBreakfast = () => {
        const breakfast = foods.filter(food => food.category === 'breakfast');
        setSelectedFoods(breakfast)
    }
    const handleLaunch = () => {
        const launch = foods.filter(food => food.category === 'launch');
        setSelectedFoods(launch)
    }
    const handleDinner = () => {
        const dinner = foods.filter(food => food.category === 'dinner');
        setSelectedFoods(dinner)
    }
    return (
        <div id="foodsContainer">
            <div className="foods-category text-center">
                <div className="Category-button">
                    <button onClick={handleBreakfast}>Breakfast</button>
                    <button onClick={handleLaunch}>Launch</button>
                    <button onClick={handleDinner}>Dinner</button>
                </div>
            </div>
            <Container>
                <div className="row my-2">
                    {
                        selectedFoods.map(food => <Food
                            key={food.id}
                            food={food}
                        ></Food>)
                    }
                </div>
                <div className="text-center">
                    <Button variant="secondary">Checkout Your Foods</Button>
                </div>
            </Container>
        </div>
    );
};

export default FoodsContainer;