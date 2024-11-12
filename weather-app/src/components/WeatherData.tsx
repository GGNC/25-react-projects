import { useMemo } from "react";
import useFetch from "../hooks/useFetch";

type WeatherDataProps = {
    cityName : string
}

function WeatherData({cityName}:WeatherDataProps){
    const { data, pending, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7792e95bc10b2b2fc0dac72ad807c0f6`);
    const renderedData = useMemo(()=>{
        const getCurrentDate = ()=>{
            return new Date().toLocaleDateString("en-us",{
                weekday :"long",
                month : "long",
                day :  "numeric",
                year : "numeric"
            });
        }
        return(
            <div className="w-full flex flex-nowrap flex-col justify-center items-center gap-2">
                <div className="w-2/3 flex justify-center items-center gap-3">
                    <p className="text-3xl font-bold">{data?.name},</p>
                    <p className="text-3xl font-bold">{data?.sys?.country}</p>
                </div>
                <p>{getCurrentDate()}</p>
                <p>{data?.main?.temp}</p>
                <p>{data?.weather ? data?.weather[0]?.description :null}</p>
                <div className="flex justify-center items-center gap-8">
                 <p>Wind Speed : {data?.wind?.speed}</p>
                 <p>Humidity : {data?.main?.humidity}</p>
                </div>
            </div>
        )
    },[data]);
    return(
        <div className="w-full m-4">
            {pending ?
                <div className="flex flex-col justify-center items-center text-4xl font-bold">
                    Fetching data, please wait...
                </div>
                : error ? 
                    <div className="flex flex-col justify-center items-center text-4xl font-bold">
                        {error}
                    </div>
                    : data?.message ? 
                        <div className="flex flex-col justify-center items-center text-4xl font-bold">
                            There is no weather data on this name : {cityName}
                        </div>
                        : <div>{renderedData}</div>
            }
        </div>
    )
}
export default WeatherData;