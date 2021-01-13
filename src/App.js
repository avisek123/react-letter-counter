import React from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  const reset = () => {
    setCount("");
  };
  return (
    <div>
      <p>The total character = {count}</p>
      <textarea
        type="text"
        cols="50"
        rows="10"
        className="full_height_Width"
        onChange={(e) => setCount(e.target.value.length)}
      />
      <br />
      <button onClick={reset}>RESET</button>
    </div>
  );
}
