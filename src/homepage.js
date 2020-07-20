import React from "react";
import { Link } from 'react-router-dom';

const homepage = () => {
    return (
        <div>
            <h1>HOMEPAGE</h1>
            <Link to="/pizza"> Customize your order </Link>
        </div>
    );
};

export default homepage;