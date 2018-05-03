import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.css";
import Login from "../Login";

const Footer = () => {
    return (
    <div className="navbar-fixed-bottom">
    <div className="container">
        <div className="row">
        <i className="fab fa-facebook"></i>
        <a href="https://www.instagram.com/jepbyjep.space/"><i style={{color:"grey"}}  id="instagram" className="fab fa-instagram"></i></a>
        <a href="https://twitter.com/jepbyjep"><i style={{color:"#325F15"}} id="twitter" className="fab fa-twitter"></i></a>
        </div>
        <div className="login-button">
        <Login />
        </div>
    </div>
    </div>
    )
    };

    export default Footer;