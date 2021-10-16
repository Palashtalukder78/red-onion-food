import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const { user, logOut } = useFirebase();
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
                                <i className="fas fa-cart-plus"></i>
                            </NavLink>
                            <NavLink className="menu" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/home">Home
                            </NavLink>
                            {!user?.email &&
                                <NavLink className="menu" activeStyle={{
                                    color: "black"
                                }} to="/login">
                                    <span className="login">Login</span>
                                </NavLink>
                            }
                            <span>
                                {user.email}
                            </span>
                            {user?.email &&
                                <NavLink className="menu" activeStyle={{
                                    color: "black"
                                }} to="/">
                                    <span onClick={logOut} className="login">Signout</span>
                                </NavLink>
                            }
                            {/* {user?.email &&
                                <button onClick={logOut} className="login">Signout</button>
                            } */}
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;