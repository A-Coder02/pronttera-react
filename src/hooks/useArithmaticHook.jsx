const useArithmaticHook = () => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  return {
    add,
    sub,
  };
};

export default useArithmaticHook;
