import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [value, setValue] = useState(0);

  const totalClicked = () => {
    return setTotalValue((inc) => inc + 1);
  };
  const increment = () => {
    return setValue((inc) => inc + 1);
  };
  const decrement = () => {
    return setValue((inc) => inc - 1);
  };
  const reset = () => {
    setTotalValue(0);
    setValue(0);
  };

  return (
    <div className={"App"}>
      <div>Total clicked: {totalValue}</div>
      <div>Current value: {value}</div>
      <div>
        <button
          onClick={() => {
            totalClicked();
            increment();
          }}
        >
          Increment
        </button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
