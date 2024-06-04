import { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incrementNumber = () => setNumber((number) => number + 1);
  const incrementCount = () => setCount((count) => count + 1);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return number % 2 === 0;
  }, [number]);

  return (
    <div className="flex grid grid-cols-1 gap-y-5">
      <div className="my-3">
        <button
          onClick={incrementNumber}
          className="bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none"
        >
          Number : {number}
        </button>
      </div>
      <div className="my-3">
        <h4 className="text-red-500">{isNumberEven ? "even" : "odd"}</h4>
      </div>
      <div className="my-3">
        <button
          onClick={incrementCount}
          className="bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none"
        >
          Count : {count}
        </button>
      </div>
    </div>
  );
};

export default UseMemoExample;
