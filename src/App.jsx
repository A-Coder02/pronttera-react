import { useState } from "react";
import CalculatedValue from "./CalculatedValue";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="p-8">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="my-6"
      />
      <CalculatedValue value={value} />
      <p>React + Vite Application</p>
    </div>
  );
};

export default App;
