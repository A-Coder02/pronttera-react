import { useState, useRef, useEffect } from "react";
import CustomInput from "./CustomInput";

const App = () => {
  const [counter, setCounter] = useState(0);

  // let counter2 = 0;
  // let counter2 = useRef(0);
  // console.log({ counter2 }); // { current: 3 }

  // console.log("App COmpoenent rerendered");

  // let inputElt = null;
  const inputElt = useRef(null);
  const anotherInputElt = useRef(null);

  // console.log({ inputEltCurrent: inputElt });

  function doSomething(domElt) {
    if (!domElt) return null;
    const randomValue = Math.round(Math.random() * 10);
    const isEven = randomValue % 2 === 0;

    if (isEven) domElt.style.backgroundColor = "tomato";
    else domElt.style.backgroundColor = "royalblue";

    domElt.value = randomValue;
  }

  return (
    <div className="p-4">
      <CustomInput ref={inputElt} />
      <CustomInput ref={anotherInputElt} />
      <button
        onClick={() => {
          inputElt.current.focus();
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

      <button
        onClick={() => {
          // inputElt.current.greet();
          inputElt.current.doSomething();
          // doSomething(inputElt.current);
          // doSomething(anotherInputElt.current);
        }}
      >
        Click ME,I'm Something...
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
