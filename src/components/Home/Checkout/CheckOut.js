import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import CartItem from '../CartItem/CartItem';
import './CheckOut.css';

import { useState } from 'react';
import { useHistory } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CheckOut = () => {
    const { cartContext } = useAuth();
    const [cart, setCart] = cartContext;
    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [success, setSuccess] = useState(false);
    const { shippingContext } = useAuth();
    const [userInfo, setUserInfo] = shippingContext;

    const history = useHistory();
    const handleShippingInfo = (e) => {
        e.preventDefault();
        setUserInfo({
            fullName: fullName,
            email: email,
            address: address,
            phone: phone,
            save: true
        });
        setSuccess(true)
    }

    const handleName = (e) => {
        setFullName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }
    const handlePhoneNumber = (e) => {
        setPhone(e.target.value);
    }
    const handlePlaceOrder = () => {
        history.push('/order-confirm');
    }
    let subTotal = 0;
    for (const item of cart) {
        subTotal = subTotal + (item.price * item.quantity);
        console.log(subTotal);
    }
    let deliveryCharge = 0;
    if (subTotal <= 100) {
        deliveryCharge = 10;
    } else {
        deliveryCharge = 25;
    }
    const total = subTotal + deliveryCharge;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="checkout">
            <Container>
                <div className="row py-5">
                    <div className="col-md-6" data-aos="slide-up" data-aos-delay="500">
                        <div className="checkout-form">
                            <form onSubmit={handleShippingInfo}>
                                <input onBlur={handleName} className="input-box" defaultValue={user.displayName} placeholder="Full name" required />
                                <input onBlur={handleEmail} type="email" className="input-box" defaultValue={user?.email} required />
                                <input onBlur={handleAddress} className="input-box" placeholder="Shipping Address" required />
                                <input onBlur={handlePhoneNumber} type="number" className="input-box" placeholder="Phone Number" required />

                                {!success &&
                                    <div className="d-grid mt-1">
                                        <button type="submit" className="saveAndContinue btn-lg text-light" >Save & Continue</button>
                                    </div>
                                }

                            </form>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-down" data-aos-delay="500">
                        <div className="cart-product">
                            <span>From Savar <b>Hot Onion</b> Tangail</span>
                            <br />
                            <span>Arive in 20-30 minites</span>
                            <div>
                                {
                                    cart.map(item => <CartItem
                                        key={item.id}
                                        item={item}
                                    ></CartItem>)
                                }
                            </div>
                        </div>
                        <div className="calculation">
                            <div>
                                <h6>Sub total: </h6>
                                <h6>Delivery charge: </h6>
                                <h6><b>Total:</b> </h6>
                            </div>
                            <div>
                                <h6> $ {subTotal}</h6>
                                <h6> $ {deliveryCharge} </h6>
                                <h6> <b>$ {total}</b> </h6>
                            </div>
                        </div>
                        {success &&
                            <div className="d-grid mt-1 placeOrder">
                                <button onClick={handlePlaceOrder} className="saveAndContinue btn-lg text-light">Place Order</button>
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CheckOut;