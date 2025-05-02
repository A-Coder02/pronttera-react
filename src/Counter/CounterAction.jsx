import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

const CounterAction = () => {
  //   const { setCount } = useContext(CounterContext);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between gap-4 mt-6">
      <button
        onClick={() => dispatch(decrement())}
        // onClick={() => setCount((prev) => prev - 1)}
        className="bg-black cursor-pointer text-white border border-gray-400 py-2 px-4 rounded-full hover:bg-gray-700 transition"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(increment())}
        // onClick={() => setCount((prev) => prev + 1)}
        className="bg-white cursor-pointer text-black py-2 px-4 rounded-full hover:bg-gray-200 transition"
      >
        Increment
      </button>
    </div>
  );
};

export default CounterAction;
