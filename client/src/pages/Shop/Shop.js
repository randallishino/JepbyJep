import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Shop.css";
import API from "../../utils/api";
import { Container, Row, Col } from "reactstrap";
import Cards from "../../components/Cards";
import Client, { Shopify } from 'shopify-buy';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import axios from "axios";
import logojepbyjep from "../../images/logojepbyjep.png";


class Shop extends Component {
  // constructor() {
  //   super();
  state = {
    products: []
  };

  componentDidMount() {
    this.getProducts();
    console.log('this step has been completed');
  }

  getProducts = () => {
    API.getData()
      .then(res => {
        // console.log('res: ', res);
        this.setState({
          products: res.data.products
        });
        // console.log('state: ', this.state.products);
      })
      .catch(err => console.log(err));
  };

  // getTitle = () => {
  //   return this.data.products.map(item => item.title);
  // }

  render() {
    return (
      <Container className='container'>
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
            <NavLink className="linkfont" to='/collaboration'>Collaboration</NavLink>
          </Col>
            <Col xs="9">
              <div className="cards">
                <p>hello</p>
            </div>
          </Col>
        </Row>
        {/* {console.log("props: ", this.props)} */}
        <Footer>
        </Footer>
      </Container>
    )
  }
}

export default Shop;
