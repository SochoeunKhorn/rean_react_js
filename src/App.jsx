import React from "react";
function App() {
  const onChangeHandler = () => {
    console.log("typing");
  };
  const onClickHandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <form action="">
        <input type="text" onChange={onChangeHandler} />
      </form>
      <button onClick={onClickHandler}>Click Me!</button>
    </>
  );
}

export default App;
