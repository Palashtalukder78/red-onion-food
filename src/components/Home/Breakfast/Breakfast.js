import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Food from '../Food/Food';
import { FoodContext } from '../Home/Home';

const Breakfast = () => {
    const [foods] = useContext(FoodContext);
    const breakfasts = foods.filter(food => food.category === 'breakfast');
    return (
        <Container>
            <div className="row">
                {
                    breakfasts.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>
                    )
                }
            </div>
        </Container>
    );
};

export default Breakfast;