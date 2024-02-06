import React from "react";
import "./card.css";
function Card(props) {
  const { img, brand, price, detail } = props.product;
  return (
    <article>
      <img src={img} alt="image product" />
      <h2>{brand}</h2>
      <h4>{price}</h4>
      <p>{detail}</p>
    </article>
  );
}

export default Card;
