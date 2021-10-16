import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = ({ food }) => {
    const { id, name, description, photo, price } = food;
    return (
        <div className="col-md-4">
            <div className="card food-item my-2">
                <div className="card-body text-center">
                    <img style={{ width: "50%" }} className="img-fluid" src={photo} alt="" />
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <h5>Price: ${price}</h5>
                    <Link to={`/food/${id}`}>
                        <span className="btn btn-sm btn-primary text-light">View Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Food;