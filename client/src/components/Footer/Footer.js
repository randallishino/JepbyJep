import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
    <div className="navbar-fixed-bottom">
    <div className="container">
        <div className="row">
        <i className="fab fa-facebook"></i>
        <a href="https://www.instagram.com/jepbyjep.space/"><i style={{color:"black"}}  id="instagram" className="fab fa-instagram"></i></a>
        <a href="https://twitter.com/jepbyjep"><i style={{color:"black"}} id="twitter" className="fab fa-twitter"></i></a>
        </div>
    </div>
    </div>
    )
    };

    export default Footer;