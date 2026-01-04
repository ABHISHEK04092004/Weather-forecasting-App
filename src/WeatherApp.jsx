import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";



function WeatherApp(){
const [weatherInfo,setWeatherInfo]=useState({
city: "Delhi",
    feelsLike: 285.41,
    humidity: 71,
    temp: 286.2,
    tempMax: 286.2,
    tempMin: 286.2,
    weather: "haze",

})

let updateInfo=(newInfo)=>{
  setWeatherInfo(newInfo);
}

  return(
  <div style={{textAlign:"center"}}>
    <h2>Weather App by Abhishek</h2>
      <SearchBox updateInfo={updateInfo} />
     <InfoBox info={weatherInfo}/> 
    </div>
    );
}
export default WeatherApp;
