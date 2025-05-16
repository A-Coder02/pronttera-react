import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// if value state changes
// then execute for loop, ow. not

// value state is dependency for result variable

const CalculatedValue = ({ value }) => {
  const [isRed, setIsRed] = useState(false);

  const result = useMemo(() => {
    let calculatedResult = 0;
    console.log("useMemo ran!");
    for (let i = 0; i <= value; i++) {
      calculatedResult += i;
    }
    return calculatedResult;
  }, [value]);

  const greet = useCallback(() => {
    console.log("Hello Heena & Mahek");
  }, []);

  const printCalculatedValue = useCallback(() => {
    console.log({ value });
  }, [value]);
  //   const printCalculatedValue = () => {
  //     console.log({ value });
  //   };

  return (
    <>
      <div
        style={{
          color: isRed ? "tomato" : "royalblue",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsRed(!isRed);
        }}
      >
        CalculatedValue {result}{" "}
      </div>
      <button onClick={greet}>Greet </button>
      <button onClick={printCalculatedValue}>Print Calculated Value </button>
    </>
  );
};

export default CalculatedValue;
