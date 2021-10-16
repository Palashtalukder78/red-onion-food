/* import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useFood from '../../../hooks/useFood';
import Food from '../Food/Food';

const Breakfast = () => {
    const { foods } = useFood();
    const breakfast = foods.filter(food => food.category === 'breakfast');
    return (
        <Container>
            <div className="row">
                {breakfast.length <= 0 ?
                    <div className="text-center">
                        <Spinner animation="grow" variant="secondary" />
                    </div>
                    :
                    breakfast.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>)
                }
            </div>
        </Container>
    );
};

export default Breakfast; */