import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
    <div className="navbar">
        <div className="row">
        <i className="fab fa-facebook fa-lg"></i>
        <a href="https://www.instagram.com/jepbyjep.space/"><i style={{color:"#383736"}}  id="instagram" className="fab fa-instagram fa-lg"></i></a>
        <a href="https://twitter.com/jepbyjep"><i style={{color:"#383736"}} id="twitter" className="fab fa-twitter fa-lg"></i></a>
        <div className="login-button">
        </div>
        </div>
    </div>
    )
    };

    export default Footer;
