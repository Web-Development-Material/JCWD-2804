import { useState, useCallback } from "react";

const UseCallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <button onClick={increment} className="bg-blue-500 text-white p-2 mt-2">
        Increment
      </button>
    </div>
  );
};

export default UseCallbackExample;
