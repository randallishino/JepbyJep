import React, { Component } from "react";
import "./Home.css";
import video from "../../compressed.mp4";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: video
        }
    }

render() {
    return (
      <Container className='container'>
      <Row>
        <Col className="logo" xs="1">
          <a href='/home'>
            JEPbyJEP
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="navi" sm={{ size: 'auto', offset: 1 }}>
          <a className="linkfont" href='/shop'>Shop</a><br />
          <a className="linkfont" href='/videos'>Videos</a><br />
          <a className="linkfont" href='collaboration'>Collaboration</a>
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <video id="homeVideo" loop autoPlay muted>
              <source src={this.state.videoURL} type="video/mp4" />
          </video>
        </Col>
      </Row>
        {console.log("props: ", this.props)}
        </Container>
        )
    }
}


export default Home;
