import { useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });

  const getFetch = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error por parte del GetFetch");
      }
      const data = await response.json();
      console.log(data);
      setState({ ...state, data: data, loading: false });
    } catch (error) {
      throw new Error();
    }
  };
  const { data, loading, hasError } = state;
  return { data, loading, hasError };
};
