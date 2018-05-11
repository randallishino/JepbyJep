import React, { Component } from "react";
import "./Home.css";
import video from "../../compressed.mp4";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import logojepbyjep from "../../images/logojepbyjep.png";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: video
        }
    }

    componentDidMount(){
        console.log('changed');
    }

render() {
    return (
     <Container className="home">
      <Row>
        <Col className="logo" xs="1">
          <NavLink to='/home'>
            <img class="logo" alt="piclogo" src={logojepbyjep}></img>
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col className="navi" xs="3">
          <NavLink className="linkfont" to='/shop'>Shop</NavLink><br />
          <NavLink className="linkfont" to='/videos'>Videos</NavLink><br />
          <NavLink className="linkfont" to='/collaboration'>Collaboration</NavLink><br />
          <NavLink className="linkfont" to='/login'>Login/Register</NavLink>

        </Col>
        <Col className="containerpages" xs="9">
          <video id="homeVideo" loop autoPlay muted>
              <source src={this.state.videoURL} type="video/mp4" />
          </video>
        </Col>
      </Row>
      <Row>
        <Col className="footer" xs="1">
            <Footer>
            </Footer>
        </Col>
      </Row>
    </Container>
        )
    }
}


export default Home;
