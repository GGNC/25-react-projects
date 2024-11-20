import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherData from "../components/WeatherData";

function WeatherPage() {
  const [cityName,setCityName] = useState<string>("");

  const handleSearch = (searchParameter: string) => {
    setCityName(searchParameter);
  };
  
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchBar onSearch={handleSearch} />
      {cityName ? <WeatherData cityName={cityName}/> : null}
    </div>
  );
}
export default WeatherPage;
