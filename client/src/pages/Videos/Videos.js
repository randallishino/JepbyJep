import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/login/login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";

class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: video
        }
    }


render() {
    return (
        <Wrapper>
            <Login />
            <div classname="container">
                <div className="logo">
                    JEPbyJEP
                </div>
                    <video id="homeVideo" loop autoPlay muted>
                        <source src={this.state.videoURL} type="video/mp4" />
                    </video>
                <div className="list">
                    <p>Shop</p>
                    <p>Videos</p>
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

export default Videos;