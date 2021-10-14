import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Food from '../Food/Food';
import { FoodContext } from '../Home/Home';

const Launch = () => {
    const [foods] = useContext(FoodContext);
    const launches = foods.filter(food => food.category === 'launch');
    return (
        <Container>
            <div className="row">
                {
                    launches.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>
                    )
                }
            </div>
        </Container>
    );
};

export default Launch;