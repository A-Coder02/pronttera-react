import { useState, useRef, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // let counter2 = 0;
  // let counter2 = useRef(0);
  // console.log({ counter2 }); // { current: 3 }

  // console.log("App COmpoenent rerendered");

  // let inputElt = null;
  const inputElt = useRef(null);

  // console.log({ inputEltCurrent: inputElt });

  return (
    <div className="p-4">
      <input
        ref={inputElt}
        id="input-field"
        type="text"
        placeholder="Enter Anything..."
        className="block w-full p-2 bg-amber-50 rounded-2xl"
      />
      <button
        onClick={() => {
          inputElt.current.focus();
          // inputElt.current.value = "Heena and Mahek";
        }}
      >
        Focus on Input
      </button>

      <button
        onClick={() => {
          inputElt.current.blur();
        }}
      >
        Blur on Input
      </button>

      {/* <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click Me Counter State {counter}
      </button> */}

      {/* <button
        onClick={() => {
          // setCounter(counter + 1);
          counter2.current++;
        }}
      >
        Click Me
      </button> */}
      {/* 
      <button
        onClick={() => {
          console.log({ counter2 });
        }}
      >
        Print Counter
      </button> */}
      {/* <h1>React + Vite Application {counter2.current}</h1> */}
    </div>
  );
};

export default App;
