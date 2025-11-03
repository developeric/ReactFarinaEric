import { Counter } from "../hooks/useCounter.js";

export default function FetchSimpsonsAPI() {
  const {handleIncrement,handleDecrement,handleReset,counter} = Counter;

  const url = `https://thesimpsonsapi.com/api/characters/${counter}`
  return <>FetchSimpsonsAPI</>;
}
