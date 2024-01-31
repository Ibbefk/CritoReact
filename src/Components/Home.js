import React from 'react';
import Header from './Header';
import './Header.css';
import Showcase from './Showcase';
import './Showcase.css';

const Home = () => {
    return (
        <div className="home">
            <Header /> {}
            <Showcase /> {}
            <div className="container">
                <h2>Welcome to Our Website</h2>
                <p>Explore our services and products.</p>
            </div>
        </div>
    );
};

export default Home;
