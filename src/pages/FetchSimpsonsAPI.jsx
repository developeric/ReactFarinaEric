import { CharacterInfo } from "../components/CharacterInfo.jsx";
import { Counter } from "../hooks/useCounter.js";
import { useFetch } from "../hooks/useFetch.js";

//
export default function FetchSimpsonsAPI() {
  const { handleIncrement, counter } = Counter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${counter}`;
  const { data } = useFetch(url);

  return (
    <>
      <CharacterInfo data={data} />
      <button onClick={() => handleIncrement()}>Increment</button>
    </>
  );
}
