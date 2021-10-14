import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import Food from '../Food/Food';
import './FoodsContainer.css';
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Launch from '../Launch/Launch';
import Dinner from '../Dinner/Dinner';
import { FoodContext } from '../Home/Home';

const FoodsContainer = () => {
    const [foods] = useContext(FoodContext);
    const randomFoods = foods.filter(food => food.category === 'launch');
    return (
        <div id="foodsContainer">
            <div className="foods-category text-center">
                <Router>
                    <div>
                        <NavLink activeClassName="selected" className="category-menu" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} to="/breakfast"><span>Breakfast</span></NavLink>
                        <NavLink className="category-menu" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} to="/launch"><span>Launch</span></NavLink>
                        <NavLink className="category-menu" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} to="/dinner"><span>Dinner</span></NavLink>
                    </div>
                    <Switch>
                        <Route path="/breakfast">
                            <Breakfast></Breakfast>
                        </Route>
                        <Route path="/launch">
                            <Launch></Launch>
                        </Route>
                        <Route path="/dinner">
                            <Dinner></Dinner>
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Container>
                <div className="row my-2">
                    {
                        randomFoods.map(food => <Food
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