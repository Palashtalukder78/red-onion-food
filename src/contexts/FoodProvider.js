import React, { createContext } from 'react';
import useFood from '../hooks/useFood';
const FoodContext = createContext();

const FoodProvider = ({ children }) => {
    const foodContext = useFood();
    return (
        <FoodContext.Provider value={foodContext}>
            {children}
        </FoodContext.Provider>
    );
};

export default FoodProvider;