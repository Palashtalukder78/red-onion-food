import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const firebaseContext = useFirebase();
    const cartContext = useCart();
    return (
        <AuthContext.Provider value={{ firebaseContext, cartContext }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;