import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const allCart = useCart();
    /* const [user, createUser, loginUser, setUserName, logOut] = useFirebase();
    const [cart, setCart] = useCart(); */
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;