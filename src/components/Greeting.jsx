import React from "react";
import "./greeting.css";
// reference style
const myTextStyle = {
  color: "green",
  fontSize: "3rem",
};
function Greeting() {
  return (
    <>
      <h1 style={{ color: "red", fontSize: "5rem" }}>Greeting</h1>
      <h4 style={myTextStyle}>Hello Developers</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
        debitis!
      </p>
    </>
  );
}

export default Greeting;

/*
    How to put style into JSX
    - inline-style : 
        style={{color : "red", fontSizs:="3rem"}}
    - reference-style :

*/
