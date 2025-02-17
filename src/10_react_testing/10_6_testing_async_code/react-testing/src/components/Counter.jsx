import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
