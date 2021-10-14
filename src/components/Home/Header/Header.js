import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home" style={{
                    display: "contents"
                }}>
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink className="menu" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/cart">
                                <i class="fas fa-cart-plus"></i>
                            </NavLink>

                            <NavLink className="menu" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/home">Home
                            </NavLink>
                            <NavLink className="menu" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/login">
                                <span className="login">Login</span>
                            </NavLink>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

        /* <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="img-fluid" style={{ width: "20%" }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink className="menu" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/cart">
                                <i class="fas fa-cart-plus"></i>
                            </NavLink>

                            <NavLink className="menu" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/home">Home
                            </NavLink>
                            <NavLink className="menu" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/login">
                                <span className="login">Login</span>
                            </NavLink>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */
    );
};

export default Header;