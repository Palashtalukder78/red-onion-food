import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
    const { name, photo, quantity, price } = item;

    return (
        <div>
            <div className="cart-item">
                <div>
                    <img style={{ width: "90px" }} className="img-fluid" src={photo} alt="" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <h6>$ {price} X {quantity}</h6>
                </div>
            </div>
        </div>
    );
};

export default CartItem;