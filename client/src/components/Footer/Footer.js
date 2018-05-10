import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.css";
import Login from "../Login";

const Footer = () => {
    return (
    <div className="navbar">
        <div className="row">
        <i className="fab fa-facebook"></i>
        <a href="https://www.instagram.com/jepbyjep.space/"><i style={{color:"#383736"}}  id="instagram" className="fab fa-instagram"></i></a>
        <a href="https://twitter.com/jepbyjep"><i style={{color:"#383736"}} id="twitter" className="fab fa-twitter"></i></a>
        <div className="login-button">
        </div>
        </div>
    </div>
    )
    };

    export default Footer;
