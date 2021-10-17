import { Badge } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const { firebaseContext } = useAuth();
    const { user, logOut } = firebaseContext;
    const { cartContext } = useAuth();
    const [cart] = cartContext;
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
                            }} to="/checkout">
                                <Badge badgeContent={cart.length} color="secondary">
                                    <i className="fas fa-cart-plus header-icon"></i>
                                </Badge>

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
                                {user?.displayName ? user.displayName : user.email}
                            </span>
                            {user?.email &&
                                <NavLink className="menu" activeStyle={{
                                    color: "black"
                                }} to="/">
                                    <span onClick={logOut} className="login">Signout</span>
                                </NavLink>
                            }
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;