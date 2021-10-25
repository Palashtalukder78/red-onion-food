import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Services from '../Services/Services';
import './ServicesContainer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServicesContainer = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container id="servicesContainer" className="my-4" data-aos="slide-left" data-aos-delay="500">
            <div className="text-center">
                <h3 >Why you Choose Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nemo pariatur assumenda architecto explicabo? Explicabo, dolores excepturi totam voluptates assumenda consequatur animi suscipit, praesentium optio itaque voluptatum saepe corrupti maiores?</p>
            </div>
            <div className="row">
                {
                    services.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
            </div>
        </Container>
    );
};

export default ServicesContainer;