import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import useFood from '../../../hooks/useFood';
import './SingleFood.css'

const SingleFood = () => {
    const { id } = useParams();
    const { foods } = useFood();
    const { cart, setCart } = useCart();
    const selectedFood = foods?.find(food => food.id == id);

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        const totalQuantity = quantity + 1;
        setQuantity(totalQuantity);
    }
    const handleDecrease = () => {
        if (quantity > 1) {
            const totalQuantity = quantity - 1;
            setQuantity(totalQuantity);
        }
    }
    const handleAddtoCart = (item) => {
        item.quantity = quantity;
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>{selectedFood?.name}</h1>
                    <p className="my-4">{selectedFood?.longdescription}</p>
                    <div className="product-price">
                        <div>
                            <h2 className="m-0">${selectedFood?.price}</h2>
                        </div>
                        <div className="product-count">
                            <span className="button" onClick={handleDecrease}>-</span>
                            <span className="px-2">{quantity}</span>
                            <span className="button" onClick={handleIncrease}>+</span>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleAddtoCart(selectedFood)} className="add-cart"> <i className="fas fa-cart-plus"></i> Add cart</button>
                        <NavLink to="/checkout">
                            <button onClick={() => handleAddtoCart(selectedFood)} className="add-cart">CheckOut</button>
                        </NavLink>
                    </div>
                </div>
                <div className="col-md-6 text-end">
                    <img className="img-fluid w-75" src={selectedFood?.photo} alt="productPhoto" />
                </div>
            </div>
        </div>
    );
};

export default SingleFood;