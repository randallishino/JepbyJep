import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Shop.css";
// import API from "../../utils/api";
import { Container, Row, Col } from "reactstrap";
// import Cards from "../../components/Cards";
import Client from 'shopify-buy';
import logojepbyjep from "../../images/logojepbyjep.png";
import Products from "../../components/Products";
import CartModal from "../../components/CartModal";

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
    console.log(lineItemsToUpdate);
  });
}

removeLineItemInCart(lineItemId) {
  const checkoutId = this.state.checkout.id



  return this.state.shopifyClient.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
    this.setState({
      checkout: res,
    });

    const cartUpdate = JSON.stringify(this.state.checkout);
    sessionStorage.setItem(this.state.checkout,cartUpdate);
    console.log(this.state.checkout);
    const cartVal = sessionStorage.getItem(this.state.checkout);
    var cartObj = JSON.parse(cartVal);
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
            <img className="logo" alt="logopic" src={logojepbyjep}></img>
          </NavLink>
          </Col>
          <Col className="cart" xs="9">
          <div className="shopcart">
          <CartModal
            checkout={this.state.checkout}
            isCartOpen={this.state.isCartOpen}
            handleCartClose={this.handleCartClose}
            updateQuantityInCart={this.updateQuantityInCart}
            removeLineItemInCart={this.removeLineItemInCart}
          />
          </div>
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
