import WeatherDetails from "components/weather-details/weather-details";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Api } from "../../api/api";
import countries from "../../data/countries.json";
import styles from "./city-form.module.css";

const CityForm = () => {
  const [weatherData, setWeatherdata] = useState({
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    description: "",
    icon: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      city: "",
      country: "",
    },
  });

  const showWeather = (data) => {
    setWeatherdata({
      temp: (data?.main?.temp - 273.15).toFixed(2),
      feels_like: (data?.main?.feels_like - 273.15).toFixed(2),
      temp_min: (data?.main?.temp_min - 273.15).toFixed(2),
      temp_max: (data?.main?.temp_max - 273.15).toFixed(2),
      description: data?.weather[0]?.description,
      icon: data?.weather[0]?.icon,
    });
  };

  const onSubmit = async (data) => {
    const result = await Api(data);
    if (data.city !== "" && data.country !== "") {
      if (result.cod === "404") {
        alert("City not found");
        console.log(result);
      } else {
        showWeather(result);
        setIsLoaded(true);
      }
    } else {
      setIsLoaded(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.fields}>
            <div className={styles.formInput}>
                <input
                type="text"
                name="city"
                placeholder="City"
                {...register("city")}
                className={styles.formInput}
                />
            </div>
          {errors.city && <span>This field is required</span>}
          <select
            name="country"
            placeholder="Country"
            {...register("country")}
            className={styles.formInput}
            required
          >
            <option disabled selected value="" className={styles.placeholder}>Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && <span>This field is required</span>}
        </div>
        <input type="submit" value="Find" className={styles.btn} />
      </form>
      <div className={styles.weatherContainer}>
        {isLoaded ? (
          <WeatherDetails showWeather={weatherData} />
        ) : (
          <p>Please insert location</p>
        )}
      </div>
    </div>
  );
};

export default CityForm;
