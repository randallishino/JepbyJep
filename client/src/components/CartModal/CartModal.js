import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LineItem from '../LineItem';
import { Row } from "reactstrap";
import "./CartModal.css";

class CartModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
      this.openCheckout = this.openCheckout.bind(this);
    }
  
    openCheckout() {
      window.open(this.props.checkout.webUrl);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
      render() {
        let line_items = this.props.checkout.lineItems.map((line_item) => {
          return (
            <LineItem
              updateQuantityInCart={this.props.updateQuantityInCart}
              removeLineItemInCart={this.props.removeLineItemInCart}
              key={line_item.id.toString()}
              line_item={line_item}
            />
          );
        });
    
      return (
        <div>
            <Button className="cart-button" color="danger" onClick={this.toggle}>Your Cart</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Your Cart</ModalHeader>
            <ModalBody>
            {line_items}      
            <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
            </div>
          </div>

          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalTax}</span>
            </div>
          </div>

          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalPrice}</span>
            </div>
          </div>
              </ModalBody>
            <ModalFooter>
            <Button className="Cart__checkout button" color="primary" onClick={this.openCheckout}>Checkout</Button>
        <Button
            color="danger"
            onClick={this.props.handleCartClose}
            onClick={this.toggle}
            className="Cart__close">
            Go Back
          </Button>            
          </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default CartModal;
  