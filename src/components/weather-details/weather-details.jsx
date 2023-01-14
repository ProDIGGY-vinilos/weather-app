import React from "react";

const WeatherDetails = (weatherData) => {
    let iconurl = "";
    if (weatherData.showWeather.icon) {
        iconurl = `http://openweathermap.org/img/w/${weatherData.showWeather.icon}.png`;
    }
    console.log(weatherData.showWeather, "weatherData");
    return (
        <>
            <div>Weather Details</div>
            <div>Temp: °{weatherData.showWeather.temp}</div>
            <div>Feels Like: °{ weatherData.showWeather.feels_like}</div>
            <div>Temp Min: °{weatherData.showWeather.temp_min}</div>
            <div>Temp Max: °{weatherData.showWeather.temp_max}</div>
            <div>Description: {weatherData.showWeather.description}</div>
            <div><img src={iconurl} alt="Weather icon"></img></div>
        </>
    )
}

export default WeatherDetails;