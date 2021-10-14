import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div id="footer" className="bg-dark text-light py-4">
                <Container>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>About us</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur beatae, autem officia obcaecati rem quos?</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h3>Important links</h3>
                            <NavLink className="footer-menu" activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }} to="/home">Home</NavLink>
                            <NavLink className="footer-menu" activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }} to="/login">Login</NavLink>
                        </div>
                        <div className="col-md-4">
                            <h3>Contact Us</h3>
                            <div>
                                <div className="contact-info">
                                    <i className="fa fa-home"></i>
                                    <span>Gopalpur, Tangail</span>
                                </div>
                                <div className="contact-info my-2">
                                    <i className="fa fa-envelope"></i>
                                    <span>palashtalukder78@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="mini-header text-light text-center py-2">
                <span>Copy right &copy; 2021 || Designed and develope by Palash Talukder</span>
            </div>
        </>
    );
};

export default Footer;