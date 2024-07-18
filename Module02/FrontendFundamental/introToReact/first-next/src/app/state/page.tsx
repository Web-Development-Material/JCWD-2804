"use client";
import { useState } from "react";

const State = () => {
  const [color, setColor] = useState<string>("green");

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-5">
        <div
          className={`w-80 h-80 ${
            color === "green" ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <div className="flex justify-center items-center space-x-5">
          <button
            onClick={() => setColor("green")}
            className="w-32 h-20 rounded-md text-white bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => setColor("red")}
            className="w-32 h-20 rounded-md text-white bg-red-500"
          >
            Red
          </button>
        </div>
      </div>
    </main>
  );
};

export default State;
