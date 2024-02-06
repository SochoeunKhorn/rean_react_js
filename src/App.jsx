import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
    console.log(value);
  }
  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        placeholder="typing..."
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => setValue("")}>Clear</button>
    </div>
  );
};

export default App;
