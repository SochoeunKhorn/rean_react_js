import React from "react";
function App() {
  function onSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
      <form>
        <input type="text" />
        <button onClick={onSubmit}>Click Me!</button>
      </form>
    </>
  );
}

export default App;
