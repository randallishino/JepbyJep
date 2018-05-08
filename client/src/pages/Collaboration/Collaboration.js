import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Collaboration.css";
import { Container, Row, Col } from "reactstrap";
import logojepbyjep from "../../images/logojepbyjep.png";
import collabrocio from "../../images/img1.JPG";

class Collaboration extends Component {

render() {
    return (
      <Container className="home">
      <Row>
        <Col className="logo" xs="1">
          <NavLink to='/home'>
            <img class="logo" src={logojepbyjep}></img>
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
        <Col className="collab" xs="9">
            <img src={collabrocio} class="imgcollab"></img>
          <div className="collab-ipsum">
          <p className="collab-partner">JepbyJep X Rocio</p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
        </Col>
      </Row>
        <Footer>
          </Footer>
        </Container>
        )
    }
}

export default Collaboration;
