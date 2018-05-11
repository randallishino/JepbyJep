import React, {Component} from 'react';
import "./LineItem.css";
import { Row, Col } from "reactstrap";

class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    return (
      <div className="Line-item">
      <Row>
      <Col xs="12">
        <div className="Line-item__img">
          {this.props.line_item.variant.image ? <img className="modalimg" src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`}/> : null}
        </div>

        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {this.props.line_item.variant.title}
            </div>
            <span className="Line-item__title">
              {this.props.line_item.title}
            </span>
          </div>

          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <i class="fas fa-minus"onClick={() => this.decrementQuantity(this.props.line_item.id)}></i>
              <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
              <i className="fas fa-plus"  onClick={() => this.incrementQuantity(this.props.line_item.id)}></i>
            </div>

            <span className="Line-item__price">
              $ { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
            </span>
            <div className="buttonremove">
            <button className="Line-item__remove" onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}>Remove from Cart</button>
            </div>
          </div>
        </div>
        </Col>
        </Row>
      </div>
    );
  }
}

export default LineItem;
