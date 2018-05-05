import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Shop.css";
import { Container, Row, Col } from "reactstrap";
import Cards from "../../components/Cards";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
class Shop extends Component {
  constructor() {
    super();
      this.state = {}
  };

  componentWillMount() {

  }

render() {
    return (
      <Container className="home">
      <Row>
        <Col className="logo" xs="12">
          <a href='/home'>
            JEPbyJEP
          </a>
        </Col>
      </Row>
      <Row>
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
        </Col>
        <Col className="collab" xs="7">
        <CardDeck>
        <Card>
          <CardImg/>
          <CardBody>
            <CardTitle>Summer 2018 </CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>$30 Brand new Shirt</CardText>
              <Button>View Item</Button>
            </CardBody>
        </Card>
      </CardDeck>
        </Col>
      </Row>
        <Row>
            <Col xs="12">
                    <Footer>
                    </Footer>
            </Col>
        </Row>
          {console.log("props: ", this.props)}
        </Container>
        )
    }
}

export default Shop;
