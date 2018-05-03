import React, { Component } from "react";
import "./Home.css";
import video from "../../compressed.mp4";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/login/login";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: video
        }
    }

render() {
    return (
        <Wrapper>
            <div classname="container">
                <div className="logo">
                    <a href='/home'>JEPbyJEP</a>
                </div>
                    <video id="homeVideo" loop autoPlay muted>
                        <source src={this.state.videoURL} type="video/mp4" />
                    </video>
                <div className="list">
                    <p>Shop</p>
                    <a href='/videos'>Videos</a>
                    <p>Collaboration</p>
                </div>
            </div>
            {console.log("props: ", this.props)}
            <Footer>
                </Footer>
        </Wrapper>
        )
    }
}

// const Home = () =>
//
// <div classname="container">
//     <div className="logo">
//     JEPbyJEP
//     </div>
//     <div className="navbar">
//     <p>Shop</p>
//     <p>Videos</p>
//     <p>Collaboration</p>
//     </div>
// </div>

export default Home;
