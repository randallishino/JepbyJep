import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Videos.css";
import { Container, Row, Col } from "reactstrap";
import logojepbyjep from "../../images/logojepbyjep.png";

class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: video
        }
    }
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
                <Col className="containerpages" xs="9">
                <div className="vimeos">
                    <center><p id="title_vid">Below lie a compilation of films<br /> we as a collective have put together from concept<br /> to visual execution for your viewing pleasure. </p></center><br/>
                    <p id="vid_1_1">I: Hari Kari</p>
                    <p id="vid_1_2">Hari Kari is part 1 of a 4 part mini short film series.</p>
                    <p id="vid_1_3">An artist struggles to overcome her inner demons. The pressure mounts as she attempts to move forward with her career and put her past failures behind her. </p>
                    <div className="videospace"><ReactPlayer url='https://vimeo.com/212865119?from=outro-embed' /></div><br/>
                    <p id="vid_2_1">II: Interview</p>
                    <p id="vid_2_2">Interview is part 2 of a 4 part mini short film series.</p>
                    <p id="vid_2_3">A model awaits judgement from a designer looking for the face to launch a start up brand.</p>
                    <div className="videospace"><ReactPlayer url='https://vimeo.com/212865384?from=outro-embed' /></div><br/>
                    <p id="vid_3_1">III: Chess</p>
                    <p id="vid_3_2">Chess is part 3 of a 4 part mini short film series.</p>
                    <p id="vid_3_3">The Master teaches her apprentice.</p>
                    <div className="videospace"><ReactPlayer url='https://vimeo.com/212861224?from=outro-embed' /></div><br/>
                    <p id="vid_4_1">IV: Ritual</p>
                    <p id="vid_4_2">Chess is part 4 of a 4 part mini short film series.</p>
                    <p id="vid_4_3">A budding young model is initiated into an exclusive group.</p>
                    <div className="videospace"><ReactPlayer url='https://vimeo.com/212860229?from=outro-embed' /></div><br/>
                </div>
                </Col>
              </Row>
                <Footer>
                  </Footer>
                </Container>
                )
            }
        }
export default Videos;
