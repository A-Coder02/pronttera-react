import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useSelector } from "react-redux";

const CounterViewer = () => {
  // const { count } = useContext(CounterContext);
  const { value } = useSelector((state) => state.counter);
  // store -> { count, auth, theme, cart,... }

  return (
    <div className="my-6 flex justify-center">
      <div className="w-32 h-32 rounded-full border-4 border-gray-600 flex items-center justify-center text-white text-5xl shadow-inner">
        {value}
      </div>
    </div>
  );
};

export default CounterViewer;
