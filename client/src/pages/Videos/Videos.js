import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Videos.css";

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
            <div classname="container">
                <div className="logo">
                    <a href='/home'>JEPbyJEP</a>
                </div>
                    <div className="vimeos">
                    <div className="videospace"><ReactPlayer url='https://vimeo.com/212865119?from=outro-embed'/></div>
                    <div className="videospace"><ReactPlayer url='https://vimeo.com/212865384?from=outro-embed'/></div>
                    <div className="videospace"><ReactPlayer url='https://vimeo.com/212861224?from=outro-embed'/></div>
                    <div className="videospace"><ReactPlayer url='https://vimeo.com/212860229?from=outro-embed'/></div>
                        </div>
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
