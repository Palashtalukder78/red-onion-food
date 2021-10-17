import React, { createContext } from 'react';
import useCart from '../hooks/useCart';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const allCart = useCart();
    return (
        <CartContext.Provider value={allCart}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;