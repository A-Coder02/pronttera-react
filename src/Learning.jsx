import React, { useEffect, useLayoutEffect, useState } from "react";

const Learning = () => {
  // 2nd hook

  // useEffect(function, dependecies)
  //   use cases:
  // 1) After rendering component jsx, perform something
  //   2) its work as effect!
  //   3) Dependecies for effects

  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(function () {
    console.log("useEffect ran");
    const id1Elt = document.querySelector("#id_1");
    console.log({ id1Elt });
  }, []);

  useLayoutEffect(function () {
    console.log("useLayoutEffect ran");
    const id1Elt = document.querySelector("#id_1");
    console.log({ id1Elt });
  }, []);
  //   useEffect(() => {
  //     console.log({ state2 });
  //   }, [state2]);

  function increaseStateValue() {
    setState(state + 1);
  }

  return (
    <div id="id_1">
      <button onClick={increaseStateValue}>Click Me ({state})</button>
      <button
        onClick={() => {
          setState2(state2 + 1);
        }}
      >
        Click Me ({state2})
      </button>
    </div>
  );
};

export default Learning;
