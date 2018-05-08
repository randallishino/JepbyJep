import React from 'react';
import "./Cards.css";
import { Container, Row, Col } from "reactstrap";


const Cards = (props) => {
  return (
<div className="card">
  <Row>
    <Col className="shopcol" xs="4">
      <img className="img-shop" alt ={props.name} src={props.image} />
      <div className="content">
          <ul>
              <strong>{props.title}</strong>
          </ul>
          <ul>
              <strong>{props.price}</strong>
          </ul>
          <ul>
              <strong> {props.description}</strong>
          </ul>
      </div>
    </Col>
    <Col className="shopcol" xs="4">
      <img className="img-shop" alt ={props.name} src={props.image} />
      <div className="content">
          <ul>
              <strong>{props.title}</strong>
          </ul>
          <ul>
              <strong>{props.price}</strong>
          </ul>
          <ul>
              <strong> {props.description}</strong>
          </ul>
      </div>
    </Col>
    <Col className="shopcol" xs="4">
      <img className="img-shop" alt ={props.name} src={props.image} />
      <div className="content">
          <ul>
              <strong>{props.title}</strong>
          </ul>
          <ul>
              <strong>{props.price}</strong>
          </ul>
          <ul>
              <strong> {props.description}</strong>
          </ul>
      </div>
    </Col>
  </Row>
</div>
  )
}

export default Cards;
