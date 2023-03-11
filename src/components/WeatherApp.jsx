import React, {useState} from "react";
import { Button } from '@material-ui/core';
import TimeNow from './TimeNow';


function WeatherApp(){
      
    const [city, setCityName] = useState("");
    const [weather, setWeather] = useState({
        temperature: "",
        weatherDescription: ""
    });

    const apiKeyWeather = process.env.REACT_APP_WEATHER_API_KEY;

    function handleChange(event){
        setCityName(event.target.value);
    };

    function searchWeather() {
        const fetchGeoCodeUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1" + "&appid=" + apiKeyWeather;

        fetch(fetchGeoCodeUrl)
            .then((res) => {
                if (res.status >= 400) {
                    setWeather({
                        temperature: "XXX",
                        weatherDescription: "Sorry, an error from server"
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log("Data for codes is: ", data[0].lat);
                fetchWeather(data[0].lat, data[0].lon);
            });
    }

    function fetchWeather(lat, lon) {
        console.log("Data for codes is: ", lat, lon);

        const fetchWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKeyWeather + "&units=metric";
        fetch(fetchWeatherUrl)
            .then((res) => {
                if (res.status >= 400) {
                    setWeather({
                        temperature: "XXX",
                        weatherDescription: "Sorry, an error from server"
                    });
                }
                return res.json();
            })
            .then((data) => {
                setWeather({
                    temperature: data.main.temp,
                    weatherDescription: data.weather[0].description
                });
            });

    }
       
    return (
        <div className="container-fluid">
        <div className="text-center">
        <h1>Weather App</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="cityInput">City Name:</label>
                <input onChange={handleChange} id="cityInput" type="text" name="cityName" value={city} autoComplete="off"/>
                <Button variant="contained" color="primary" type="submit" onClick={()=>searchWeather()}>Find</Button>
                <p> The city you are looking for is: <strong>{city}</strong></p>
            </form>
            <div id="result">
                    <p>The temparature of '<strong>{city}</strong>' at '<strong><TimeNow /></strong>' is '<strong>{weather.temperature}</strong>' &deg;C</p>
                    <p>It looks like the weather today is going to be {weather.weatherDescription} </p>
            </div>
            
            
        </div>
        </div>

 );
}


export default WeatherApp;
