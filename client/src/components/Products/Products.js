import React, { Component } from 'react';
import Product from '../Product';
import { Container, Row, Col, CarouselItem } from "reactstrap";

class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          checkout={this.props.checkout}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
      <div className="Product-wrapper">
        <Row>
            {products}
        </Row>
      </div>
    );
  }
}

export default Products;
