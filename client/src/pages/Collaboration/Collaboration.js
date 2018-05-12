import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Collaboration.css";
import { Container, Row, Col } from "reactstrap";
import logojepbyjep from "../../images/logojepbyjep.png";
import collabrocio from "../../images/img1.JPG";
import collabrociotwo from "../../images/img2.JPG";
import Client from "shopify-buy";
import CartModal from "../../components/CartModal";

class Collaboration extends Component {

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

    this.setState({
      shopifyClient
    });
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
    const updatedItem = localStorage.setItem("lineItemsToAdd",JSON.stringify(lineItemsToAdd));
    localStorage.getItem(updatedItem);
    

  });
}

updateQuantityInCart(lineItemId, quantity) {
  const checkoutId = this.state.checkout.id
  const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

  return this.state.shopifyClient.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
    this.setState({
      checkout: res,
    });
  })
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
      <Container className="home">
      <Row>
        <Col className="logo" xs="1">
          <NavLink to='/home'>
            <img class="logo" alt="imglogo" src={logojepbyjep}></img>
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
          <NavLink className="linkfont" to='/login'>Login/Register</NavLink><br />

        </Col>
        <Col className="collab" xs="9">
            <img src={collabrocio} alt="collab1" class="imgcollab"></img>
          <div className="collab-container">
          <p className="collab-partner">JepbyJep X Rocio</p>
            <p className="collab-ipsum">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>

          <img src={collabrociotwo} alt="collab2" class="imgcollab"></img>
        <div className="collab-container">
        <p className="collab-partner">JepbyJep X Rocio</p>
          <p className="collab-ipsum">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
