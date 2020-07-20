import React from "react";
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <h1>HOMEPAGE</h1>
            <img src="https://i.pinimg.com/originals/50/30/e0/5030e00b06fb82776c22ab01ea5b6fab.jpg"/>
            <Link to="/pizza"> Customize your order </Link>
        </div>
    );
};

export default Homepage;