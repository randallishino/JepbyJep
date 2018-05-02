import React from "react";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
    <div className="navbar-fixed-bottom">
    <div className="container">
        <div className="row">
        <i className="fab fa-facebook"></i>
        <a href="https://www.instagram.com/jepbyjep.space/"><i style={{color:"black"}}  className="fab fa-instagram"></i></a>
        <a href="https://twitter.com/jepbyjep"><i style={{color:"black"}} className="fab fa-twitter"></i></a>
        </div>
    </div>
    </div>
    )
    };

    export default Footer;