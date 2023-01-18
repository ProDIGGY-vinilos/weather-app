import styles from './weather-details.module.css';

const WeatherDetails = (weatherData) => {
	let iconurl = '';
	const description =
		weatherData.showWeather.description.charAt(0).toUpperCase() +
		weatherData.showWeather.description.slice(1);
	if (weatherData.showWeather.icon) {
		iconurl = `http://openweathermap.org/img/wn/${weatherData.showWeather.icon}@4x.png`;
	}
	return (
		<div className={styles.container}>
			<h2>Weather Details</h2>
			<div className={styles.iconDesc}>
				<img src={iconurl} alt='Weather icon' className={styles.icon}></img>
				<div className={styles.description}>{description}</div>
			</div>
			<div className={styles.detailsList}>
				<div className={styles.contentDetail}>
					Temp:
					<div className={styles.details}>°{weatherData.showWeather.temp}</div>
				</div>
				<div className={styles.contentDetail}>
					Feels Like:
					<div className={styles.details}>°{weatherData.showWeather.feels_like}</div>
				</div>
				<div className={styles.contentDetail}>
					Temp Min:
					<div className={styles.details}>°{weatherData.showWeather.temp_min}</div>
				</div>
				<div className={styles.contentDetail}>
					Temp Max:
					<div className={styles.details}>°{weatherData.showWeather.temp_max}</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherDetails;
