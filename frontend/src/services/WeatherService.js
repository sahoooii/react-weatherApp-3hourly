import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// infoType= weather ? forecast
//searchParams= cityName ? lat ? lod
const getWeatherData = async (infoType, searchParams) => {
	try {
		const res = await axios.get(`${BASE_URL}/api/${infoType}`, {
			params: searchParams,
		});
		return res.data;
	} catch (error) {
		console.error('Failed to fetch API:', error);
		throw error;
	}
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
	try {
		const formattedCurrentWeather = await getWeatherData(
			'weather',
			searchParams
		).then(formatCurrentWeather);
		
		return formattedCurrentWeather;
	} catch (error) {
		console.log(error.message);
	}
};

export default getFormattedCurrentWeather;

export { getWeatherData };
