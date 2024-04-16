const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// infoType= weather ? forecast
//searchParams= cityName ? lat ? lod
const getWeatherData = (infoType, searchParams) => {
	const url = new URL(BASE_URL + '/' + infoType);
	url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

	return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
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
	const formattedCurrentWeather = await getWeatherData(
		'weather',
		searchParams
	).then(formatCurrentWeather);

	// console.log(formattedCurrentWeather);
	return formattedCurrentWeather;
};

export default getFormattedCurrentWeather;

export { getWeatherData };
