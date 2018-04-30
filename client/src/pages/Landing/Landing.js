import React, {Component } from "react";
import Wrapper from "../../components/Wrapper";
import video from "../../compressed.mp4";
import "./Landing.css";

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
            <h1>JEPbyJEP</h1>

        <video id="myVideo" loop autoPlay muted>
            <source src={this.state.videoURL} type="video/mp4" />
        </video>

<div className="navs">
<ul className="nav justify content center" id="navs">
<li className="nav-item">
  <a class="nav-link"href="./contact.html">CONTACT</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="./films.html">FILMS</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="./clothes.html">CLOTHES</a>
</li>
</ul>

</div>
</Wrapper>
    
    )
}
};

export default Landing;