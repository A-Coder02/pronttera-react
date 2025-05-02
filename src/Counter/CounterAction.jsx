import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import Button from "./components/Button";

const CounterAction = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="flex justify-between gap-4 mt-6">
      <button
        onClick={() => setCount(count - 1)}
        className="bg-black cursor-pointer text-white border border-gray-400 py-2 px-4 rounded-full hover:bg-gray-700 transition"
      >
        Decrement
      </button>

      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default CounterAction;
