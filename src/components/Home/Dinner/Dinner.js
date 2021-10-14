import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Food from '../Food/Food';
import { FoodContext } from '../Home/Home';

const Dinner = () => {
    const [foods] = useContext(FoodContext);
    const dinners = foods.filter(food => food.category === 'dinner');
    return (
        <Container>
            <div className="row">
                {
                    dinners.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>
                    )
                }
            </div>
        </Container>
    );
};

export default Dinner;