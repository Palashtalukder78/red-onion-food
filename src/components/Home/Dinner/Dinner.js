/* import { Container, Spinner } from 'react-bootstrap';
import useFood from '../../../hooks/useFood';
import Food from '../Food/Food';

const Dinner = () => {
    const { foods } = useFood();
    const dinners = foods.filter(food => food.category === 'dinner');
    return (
        <Container>
            <div className="row">
                {dinners.length <= 0 ?
                    <div className="text-center">
                        <Spinner animation="grow" variant="secondary" />
                    </div>
                    :
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

export default Dinner; */