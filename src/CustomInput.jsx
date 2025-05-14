import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        greet: function () {
          console.log("Welcome to Pronttera Lab!!!!!");
        },
        doSomething: function () {
          const domElt = inputRef.current;
          if (!domElt) return null;
          const randomValue = Math.round(Math.random() * 10);
          const isEven = randomValue % 2 === 0;

          if (isEven) domElt.style.backgroundColor = "tomato";
          else domElt.style.backgroundColor = "royalblue";

          domElt.value = randomValue;
        },
      };
    },
    []
  );
  return (
    <div className="bg-amber-200 p-4 rounded-3xl mb-4">
      <input
        // ref={ref}
        ref={inputRef}
        id="input-field"
        type="text"
        placeholder="Enter Anything..."
        className="block w-full p-2 bg-amber-50 rounded-2xl"
      />
    </div>
  );
});

export default CustomInput;
