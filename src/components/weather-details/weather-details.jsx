import React from "react";
import styles from "./weather-details.module.css";

const WeatherDetails = (weatherData) => {
    let iconurl = "";
    if (weatherData.showWeather.icon) {
        iconurl = `http://openweathermap.org/img/w/${weatherData.showWeather.icon}.png`;
    }
    return (
        <div className={styles.container}>
            <div>Weather Details</div>
            <div><img src={iconurl} alt="Weather icon"></img></div>
            <div className={styles.details}>Description: {weatherData.showWeather.description}</div>
            <div className={styles.detailsList}>
            <div className={styles.details}>Temp: °{weatherData.showWeather.temp}</div>
            <div className={styles.details}>Feels Like: °{ weatherData.showWeather.feels_like}</div>
            <div className={styles.details}>Temp Min: °{weatherData.showWeather.temp_min}</div>
            <div className={styles.details}>Temp Max: °{weatherData.showWeather.temp_max}</div>
            </div>
        </div>
    )
}

export default WeatherDetails;