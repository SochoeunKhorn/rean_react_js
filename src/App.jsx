import React from "react";
import Message from "./components/Message";
function App() {
  return (
    <>
      <Greeting />
      <Job />
      <Message />
    </>
  );
}
function Greeting() {
  return <h1>Hello !</h1>;
}
const Job = () => {
  return <h2>React Js Developer</h2>;
};

export default App;

/*
  component is peace of code. 
  component has two type : 
    - class component : old seri
    - functional component : has two type of function
        + arrow-function
        + default-function
  component return JSX
  JSX like hmtl ... 😒
    - return only one element
    - can return 
      + <> ... </>
      + <div> ... </div>
      + <React.Fragment> ... </React.Fragment>
*/
