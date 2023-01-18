export const Api = async (dataform) => {
	const apiid = process.env.APIKEY;
	const city = dataform.city;
	const countryAb = dataform.country;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryAb}&APPID=${apiid}`;
	try {
		return fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (data.cod === 200) {
					return data;
				} else {
					return data;
				}
			});
	} catch (error) {
		return error;
	}
};
