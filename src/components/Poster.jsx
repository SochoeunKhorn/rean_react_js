import React from "react";
import "./Poster.css";
function Poster({ imgSrc, name, major }) {
  return (
    <article>
      <img src={imgSrc} alt="profile" />
      <h2>{name}</h2>
      <h4>{major}</h4>
    </article>
  );
}

export default Poster;
