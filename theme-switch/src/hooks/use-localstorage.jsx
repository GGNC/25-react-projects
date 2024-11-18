import { useEffect ,useState } from "react";

function useLocalStorage(key, givenValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || Boolean(givenValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = givenValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value,setValue];
}

export default useLocalStorage;