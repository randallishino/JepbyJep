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

    componentDidMount(){
        console.log('changed');        
    }

render() {
    return (
      <Container className="home">
      <Row>
<<<<<<< HEAD
        <Col className="logo" xs="12">
          <a href='/home'>
=======
        <Col className="logo" xs="1">
          <NavLink to='/home'>
>>>>>>> 05518045bbe92cb273fec2669888932e89d42ba6
            JEPbyJEP
          </NavLink>
        </Col>
      </Row>
      <Row>
<<<<<<< HEAD
        <Col className="navi" xs="3">
            <Row>
                <a className="linkfont" href='/shop'>Shop</a><br />
            </Row>
            <Row>
                <a className="linkfont" href='/videos'>Videos</a><br />
            </Row>
            <Row>
                <a className="linkfont" href='collaboration'>Collaboration</a>
            </Row>
=======
        <Col className="navi" sm={{ size: 'auto', offset: 1 }}>
          <NavLink className="linkfont" to='/shop'>Shop</NavLink><br />
          <NavLink className="linkfont" to='/videos'>Videos</NavLink><br />
          <NavLink className="linkfont" to='/collaboration'>Collaboration</NavLink>
>>>>>>> 05518045bbe92cb273fec2669888932e89d42ba6
        </Col>
        <Col className="vid" xs="9">
          <video id="homeVideo" loop autoPlay muted>
              <source src={this.state.videoURL} type="video/mp4" />
          </video>
        </Col>
      </Row>
<<<<<<< HEAD
        <Row>
            <Col xs="12">
                    <Footer>
                    </Footer>
            </Col>
        </Row>
          {console.log("props: ", this.props)}
=======
        <Footer>
          </Footer>
>>>>>>> 05518045bbe92cb273fec2669888932e89d42ba6
        </Container>
        )
    }
}


export default Home;
