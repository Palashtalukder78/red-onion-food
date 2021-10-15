import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './FoodsContainer.css';
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Launch from '../Launch/Launch';
import Dinner from '../Dinner/Dinner';

const FoodsContainer = () => {
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
                        <Route exact path="/">
                            <Breakfast></Breakfast>
                        </Route>
                        <Route exact path="/home">
                            <Breakfast></Breakfast>
                        </Route>
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

                </div>
                <div className="text-center">
                    <Button variant="secondary">Checkout Your Foods</Button>
                </div>
            </Container>
        </div>
    );
};

export default FoodsContainer;