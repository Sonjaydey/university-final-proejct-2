import React from 'react';
import Navigation from './../../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
const Bikas = () => {
    return (
        <div>
        <Navigation />
            <h1>Bikas payment Comming soon.........</h1>
            <li><Link to="/strip">payment now stripe</Link></li>
        </div>
    );
};

export default Bikas;