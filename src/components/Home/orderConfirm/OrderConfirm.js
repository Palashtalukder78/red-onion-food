import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import deliveryman from '../../../images/delivery.png';
import deliverymanlogo from '../../../images/Group 1152.png';

import './OrderConfirm.css';
const OrderConfirm = () => {
    const { shippingContext } = useAuth();
    const [userInfo] = shippingContext;
    console.log(userInfo);
    return (
        <Container>
            <div className="row my-4">
                <div className="col-md-6">
                    <iframe style={{ borderRadius: "30px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.122256082523!2d90.25548651429897!3d23.8497920908905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd3d3d1e68f%3A0xeb0384669f684dbe!2sSavar%20City%20Center!5e0!3m2!1sen!2sbd!4v1634467077862!5m2!1sen!2sbd" width="95%" height="500" title="my-location" loading="lazy"></iframe>
                </div>
                <div className="col-md-6">
                    <div className=" deliver-info">
                        <div className="text-center my-2">
                            <img className="img-fluid" style={{ width: "100px" }} src={deliveryman} alt="" />
                        </div>
                        <div className="delivery-single-info">
                            <span>Your Location:</span>
                            <br />
                            <span className="text-muted">{userInfo.address}</span>
                            <br />
                            <br />
                            <span>Email Address:</span>
                            <br />
                            <span className="text-muted">{userInfo?.email}</span>
                        </div>
                        <div className="my-2">
                            <h3 >09:30pm</h3>
                            <span>Estimate Time</span>
                        </div>
                        <div className="delivery-single-info">
                            <div className="delivery-single">
                                <div>
                                    <img style={{ width: "70px" }} src={deliverymanlogo} alt="" />
                                </div>
                                <div className="ms-2 text-secondary">
                                    <h5>Hamim</h5>
                                    <span>Rider</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OrderConfirm;