import { useState, useMemo } from "react";

const UseMemoExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {memoizedValue}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white p-2 mt-2"
      >
        Increment
      </button>
    </div>
  );
};

export default UseMemoExample;
