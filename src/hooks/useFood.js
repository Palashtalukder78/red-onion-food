import { useEffect, useState } from 'react';

const useFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(error => {
                console.log(error.message)
            })
    }, []);
    return {
        foods,
        setFoods
    }
};

export default useFood;