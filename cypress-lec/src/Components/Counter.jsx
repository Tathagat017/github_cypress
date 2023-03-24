import React, { useState } from "react";
import styles from "./counter.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  function sum(a, b) {
    return a + b;
  }
  const handleAdd = () => {
    setCount((count) => count + 1);
  };

  const handleReduce = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h2 data-testid="counter">Counter:{count}</h2>
      <button
        className={`${styles["large"]}  ${styles["color"]} counter-add-button `}
        onClick={handleAdd}
      >
        +
      </button>
      <button
        className={`${styles["large"]}  ${styles["color"]} counter-reduce-button`}
        onClick={handleReduce}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
