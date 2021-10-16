/* import { Container, Spinner } from 'react-bootstrap';
import useFood from '../../../hooks/useFood';
import Food from '../Food/Food';

const Launch = () => {
    const { foods } = useFood();
    const launches = foods.filter(food => food.category === 'launch');
    return (
        <Container>
            <div className="row">
                {launches.length <= 0 ?
                    <div className="text-center">
                        <Spinner animation="grow" variant="secondary" />
                    </div>
                    :
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

export default Launch; */