import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import useDelivery from '../hooks/useDelivery';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const firebaseContext = useFirebase();
    const cartContext = useCart();
    const shippingContext = useDelivery();
    return (
        <AuthContext.Provider value={{ firebaseContext, cartContext, shippingContext }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;