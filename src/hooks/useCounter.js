import { useState } from "react";

export const Counter = (InitialValue) => {
  const [counter, setCounter] = useState(InitialValue);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(InitialValue);
  };

  return { handleIncrement, handleDecrement, handleReset, counter };
};
