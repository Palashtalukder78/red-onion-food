import React from 'react';
import './Services.css'

const Services = ({ service }) => {
    const { title, description, photo, icon } = service;
    return (
        <div className="col-md-4">
            <div className="card services">
                <img src={photo} alt="" />
                <div className="card-body service">
                    <div className="service-icon text-center">
                        <i className={icon}></i>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;