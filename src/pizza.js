import React from "react";
import { Link } from 'react-router-dom';

const pizza = () => {
    return (
        <div>
            <h1>Make your pizza as Yummy as you want!!</h1>
            <Link path to="/">Back to Home</Link>
        </div>
    );
};

export default pizza;