import WeatherDetails from "components/weather-details/weather-details";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Api } from "../../api/api";

const CityForm = () => {
    const [weatherData, setWeatherdata] = useState({
        "temp": 0,
        "feels_like": 0,
        "temp_min": 0,
        "temp_max": 0,
        "description": "",
        "icon": ""
    });

    const { register, handleSubmit, formState: {errors} } = useForm(
        {
            mode: "onBlur",
            reValidateMode: "onChange",
            defaultValues: {
                city: "",
                country: ""
            }
        }
    );
    
    const showWeather = (data) => {
        setWeatherdata({
            "temp": (data?.main?.temp - 273.15).toFixed(2),
            "feels_like": (data?.main?.feels_like - 273.15).toFixed(2),
            "temp_min": (data?.main?.temp_min - 273.15).toFixed(2),
            "temp_max": (data?.main?.temp_max - 273.15).toFixed(2),
            "description": data?.weather[0]?.description,
            "icon": data?.weather[0]?.icon
        });
    }

    const onSubmit = async (data) => {
        console.log(JSON.stringify(data));
        const result = await Api(data);
        console.log(result);
        console.log(result.weather[0]);
        showWeather(result);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    {...register("city")}
                />
                {errors.city && <span>This field is required</span>}
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    {...register("country")}
                />
                {errors.country && <span>This field is required</span>}
                <input type="submit" />
            </form>
            <WeatherDetails showWeather={weatherData} />
        </>
    )
};

export default CityForm;