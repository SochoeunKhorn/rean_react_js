import React from "react";
import "./Poster.css";
function Poster(props) {
  return (
    <article>
      <img src={props.imgSrc} alt="profile" />
      <h2>{props.name}</h2>
      <h4>{props.major}</h4>
    </article>
  );
}

export default Poster;
