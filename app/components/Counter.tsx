"use client";

import React from "react";
import { useState } from "react";
const Counter = () => {
  console.log("Count component");
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
