const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// infoType= weather ? forecast
//searchParams= cityName ? lat ? lod
const getWeatherData = async (infoType, searchParams) => {
	const url = new URL(`${BASE_URL}/api/${infoType}`);

	url.search = new URLSearchParams({ ...searchParams });

	const res = await fetch(url);
	return await res.json();
};

const formatCurrentWeather = (data) => {
	console.log('data:', data);

	const {
		coord: { lat, lon },
		main: { temp, feels_like, temp_min, temp_max, humidity },
		name,
		dt,
		sys: { country, sunrise, sunset },
		weather,
		wind: { speed },
	} = data;

	const { main: details_weather, icon } = weather[0];

	return {
		lat,
		lon,
		temp,
		feels_like,
		temp_min,
		temp_max,
		humidity,
		name,
		dt,
		country,
		sunrise,
		sunset,
		details_weather,
		icon,
		speed,
	};
};

//Get current weather
const getFormattedCurrentWeather = async (searchParams) => {
	try {
		const formattedCurrentWeather = await getWeatherData(
			'weather',
			searchParams
		).then(formatCurrentWeather);
		console.log('formattedCurrentWeather:', formattedCurrentWeather);

		return formattedCurrentWeather;
	} catch (error) {
		console.log(error.message);
	}
};

export default getFormattedCurrentWeather;

export { getWeatherData };
