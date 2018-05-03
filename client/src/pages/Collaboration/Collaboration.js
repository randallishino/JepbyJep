import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Collaboration.css";
import { Container, Row, Col } from "reactstrap";

class Collaboration extends Component {


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
        <div className="Collaboration">
          <div className="collab-image">
            <img src="https://i.imgur.com/5b2aabN.png" class="imgcollab"></img>
          </div>
          <div className="collab-ipsum">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
        </div>
        </Col>
      </Row>
        {console.log("props: ", this.props)}
        </Container>
        )
    }
}

export default Collaboration;
