import React from "react";
import camera from './camera.svg';
import './style.css';

const Header = () => {
    return (

        <h1>
            <img className="logo" src={camera} alt="Logo" />
             V našem kině právě uvádíme
        </h1>

    )
};

export default Header;