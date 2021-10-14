import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Food from '../Food/Food';
import './FoodsContainer.css';

const FoodsContainer = () => {
    const [foods, setFoods] = useState([]);
    useState(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    return (
        <>
            <div className="foods-category text-center">
                <button >Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
            <Container>
                <div className="row my-2">
                    {
                        foods.map(food => <Food
                            key={food.id}
                            food={food}
                        ></Food>)
                    }
                </div>
            </Container>
        </>
    );
};

export default FoodsContainer;