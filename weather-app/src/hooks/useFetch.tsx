import { useEffect, useState } from "react";

function useFetch(url: string ) {
  const [data, setData] = useState<object>({});
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    try {
      setPending(true);
      const response = await fetch(url);
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
