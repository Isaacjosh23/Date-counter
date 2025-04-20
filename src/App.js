import React from "react";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // const stepMinus = () => setStep((s) => s - 1);
  // const stepPlus = () => setStep((s) => s + 1);

  return (
    <div className="content">
      <div className="btn-con">
        <button onClick={() => setStep((s) => s - 1)}>&minus;</button>
        <span>Steps:{step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="btn-con">
        <button onClick={() => setCount((c) => c - step)}>&minus;</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from now is `
            : `${Math.abs(count)} days ago was `}
        </span>

        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
