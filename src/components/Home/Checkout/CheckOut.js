import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import CartItem from '../CartItem/CartItem';
import './CheckOut.css';

const CheckOut = () => {
    const { cartContext } = useAuth();
    const [cart, setCart] = cartContext;

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
    return (
        <div className="checkout">
            <Container>
                <div className="row py-5">
                    <div className="col-md-6">
                        <div>
                            <form>

                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
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
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CheckOut;