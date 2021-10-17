import React from 'react';
import './Congratulate.css';
import danching from '../../../images/danching.gif'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Congratulate = () => {
    return (
        <div className="congratulate">
            <Container>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="text-center">
                            <img style={{ width: "35%" }} src={danching} alt="" />
                            <h1>Order Complete</h1>
                            <span>We will deliver ASAP.</span>
                            <br />
                            <NavLink to="/home">
                                <button className="btn btn-danger my-4">Go Back</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Congratulate;