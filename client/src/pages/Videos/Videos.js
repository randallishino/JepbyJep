import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Videos.css";
import { Container, Row, Col } from "reactstrap";

class Videos extends Component {
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
          <div className="vimeos">
            <div className="videospace"><ReactPlayer url='https://vimeo.com/212865119?from=outro-embed' width="800px"/></div>
            <div className="videospace"><ReactPlayer url='https://vimeo.com/212865384?from=outro-embed' width="800px"/></div>
            <div className="videospace"><ReactPlayer url='https://vimeo.com/212861224?from=outro-embed' width="800px"/></div>
            <div className="videospace"><ReactPlayer url='https://vimeo.com/212860229?from=outro-embed' width="800px"/></div>
          </div>
        </Col>
      </Row>
        {console.log("props: ", this.props)}
        </Container>
        )
    }
}

export default Videos;
