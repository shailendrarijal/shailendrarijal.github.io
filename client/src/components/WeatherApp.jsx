import React, {useState, Component, useEffect} from "react";
import axios from "axios";
import { Button } from '@material-ui/core';
import TimeNow from './TimeNow';


function WeatherApp(){

    const [url, setUrl] = useState("");
    const [city, setCityName] = useState({
        cityName: "",
        temperature: "",
        weatherDescription: ""
    });

    function handleChange(event){
        const cityurl = event.target.value;
        setCityName({cityName: cityurl});
       
        const apiKey = "d74e7281a15f3de4d183fc3c5109d414";
        const unit = "metric";

        const url="https://api.openweathermap.org/data/2.5/weather?q=" + cityurl +"&units=" + unit+ "&appid=" + apiKey +"";
        setUrl(url);
    }


    async function getTemperature() {
        const data = await fetch(url);
        const resy = await data.json();
        setCityName({
            cityName: resy.name,
            temperature: resy.main.temperature,
            weatherDescription: resy.weather.description
        });
        
    }
       
    return (
        <div className="container">
        <h1 className="text-primary">Weather App</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="cityInput">City Name:</label>
                <input onChange={handleChange} id="cityInput" type="text" name="cityName" value={city.cityName} autoComplete="off"/>
                <Button variant="contained" color="primary" type="submit" onClick={getTemperature}>Find</Button>
                <p> The city you are looking for is: <strong>{city.cityName}</strong></p>
            </form>
            <div id="result">
                <p>The temparature of '<strong>{city.cityName}</strong>' at '<strong><TimeNow /></strong>' is '<strong>{city.temprature}</strong>' &deg;C</p>
                <p>It looks like the weather today is going to be {city.weatherDescription} </p>
            </div>
            
            
        </div>

 );
}


export default WeatherApp;