import React, {Component } from "react";
import Wrapper from "../../components/Wrapper";
import video from "../../compressed.mp4";
import "./Landing.css";
import {NavLink} from "react-router-dom";

class Landing extends Component {
constructor (props) {
    super(props);

    this.state = {
        videoURL: video
    }
}

render () {
    return (
      <Wrapper>
  <NavLink to="/home" className="grow" id="title">JEPbyJEP</NavLink>

        <video id="myVideo" loop autoPlay muted>
            <source src={this.state.videoURL} type="video/mp4" />
        </video>

<div className="navs">
<ul className="nav justify content center" id="navs">
<li className="nav-item">
<NavLink to="/contact" className="nav-link">CONTACT</NavLink>
</li>
<li className="nav-item">
  <NavLink to="/films" className="nav-link">FILMS</NavLink>
</li>
<li className="nav-item">
<NavLink to="/clothes" className="nav-link">CLOTHES</NavLink>
</li>
</ul>

</div>
</Wrapper>
    
    )
}
};

export default Landing;