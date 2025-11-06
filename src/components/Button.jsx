import { Counter } from "../hooks/useCounter.js";

export default function Button() {
const { handleIncrement, handleDecrement,counter} = Counter(1);
return (
  <>

  </>
);
}