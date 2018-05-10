import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Shop.css";
// import API from "../../utils/api";
import { Container, Row, Col, CarouselItem } from "reactstrap";
// import Cards from "../../components/Cards";
import Client, { Shopify } from 'shopify-buy';
import axios from "axios";
import logojepbyjep from "../../images/logojepbyjep.png";
import Products from "../../components/Products";
import Cart from "../../components/Cart";


class Shop extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentDidMount() {
    const shopifyClient = Client.buildClient({
      storefrontAccessToken: '0c729c3d521e6d7523cd2f6f9cd4707f',
      domain: 'JepbyJep.myshopify.com'
    });

    console.log(this.state);
    this.setState({
      shopifyClient
    });
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.shopifyClient && !prevState.shopifyClient) {
      this.state.shopifyClient.checkout.create().then((res) => {
        this.setState({
          checkout: res,
        });
      });

      this.state.shopifyClient.product.fetchAll().then((res) => {
        this.setState({
          products: res,
        });
      });

      this.state.shopifyClient.shop.fetchInfo().then((res) => {
        this.setState({
          shop: res,
        });
      });
    }
  }

addVariantToCart(variantId, quantity){
  this.setState({
    isCartOpen: true,
  });

  const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
  const checkoutId = this.state.checkout.id

  return this.state.shopifyClient.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
    this.setState({
      checkout: res,
    });
  });
}

updateQuantityInCart(lineItemId, quantity) {
  const checkoutId = this.state.checkout.id
  const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

  return this.state.shopifyClient.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
    this.setState({
      checkout: res,
    });
  });
}

removeLineItemInCart(lineItemId) {
  const checkoutId = this.state.checkout.id

  return this.state.shopifyClient.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
    this.setState({
      checkout: res,
    });
  });
}

handleCartClose() {
  this.setState({
    isCartOpen: false,
  });
}

  render() {
    return (
      <Container className='container'>
        <Row>
          <Col className="logo" xs="1">
            <NavLink to='/home'>
            <img class="logo" src={logojepbyjep}></img>
          </NavLink>
          </Col>
          <Col className="cart" xs="9">
          {!this.state.isCartOpen &&
          <div className="shopcart">
            <i className="fas fa-shopping-cart" onClick={this.openCheckout}></i>
          </div>
          }
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

            <Products
          products={this.state.products}
          client={this.props.client}
          addVariantToCart={this.addVariantToCart}
        />
          </Col>
        </Row>
        <Footer>
        </Footer>
      </Container>
    )
  }
}

export default Shop;
