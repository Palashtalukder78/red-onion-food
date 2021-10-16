import React from 'react';
import useCart from '../../../hooks/useCart';

const CheckOut = () => {
    const { cart, setCart } = useCart();

    console.log(cart);
    return (
        <div>

        </div>
    );
};

export default CheckOut;