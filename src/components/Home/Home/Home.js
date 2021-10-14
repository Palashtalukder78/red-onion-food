import FoodsContainer from '../FoodsContainer/FoodsContainer';
import Banner from '../Banner/Banner';
import './Home.css';
import ServicesContainer from '../ServicesContainer/ServicesContainer';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FoodsContainer></FoodsContainer>
            <ServicesContainer></ServicesContainer>
        </>
    );
};

export default Home;