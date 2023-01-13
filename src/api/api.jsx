import React from "react";

const Api = (data) => {
    const apiid = "a77b26af89fb3e0c44badf288bdb979b";
    const city = data.city;
    const countryAb = data.country;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryAb}&APPID=${apiid}}`;
    return (
        <>
            <h1>API</h1>
        </>
    )
}

export default Api;