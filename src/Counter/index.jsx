import React from "react";
import CounterAction from "./CounterAction";
import CounterViewer from "./CounterViewer";

export default function Counter() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-xl text-center w-80">
        <h1 className="text-white text-3xl font-bold mb-1">
          ClickCount <span className="text-gray-400 text-sm">v1.0</span>
        </h1>
        <CounterViewer />
        <CounterAction />
      </div>
    </div>
  );
}
