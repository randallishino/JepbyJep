import React from 'react';
// import "./Cards.css";


const Cards = (props) => {
  return (
<div className="card">
<div className="img-container">
    <img alt ={props.name} src={props.image} />
</div>
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
</div>
  )
}

export default Cards;
