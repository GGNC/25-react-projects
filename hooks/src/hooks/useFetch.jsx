import { useEffect } from "react";
import { useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(`${err}`);
    } finally {
      setPending(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending, error };
}

export default useFetch;