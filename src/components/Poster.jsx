import React from "react";
import "./Poster.css";
function Poster({ imgSrc, name, major, children }) {
  return (
    <article>
      <img src={imgSrc} alt="profile" />
      <h2>{name}</h2>
      <h4>{major}</h4>
      {children}
    </article>
  );
}

export default Poster;
