import axios from 'axios';

export const fetchWeatherFromAPI = async (type, params) => {
	const endpoint = `${process.env.OPEN_WEATHER_APP_BASE_URL}/${type}`;
	return await axios.get(endpoint, { params });
};

// To get params
export const buildWeatherQueryParams = ({ q, lat, lon, units }) => {
	return {
		appid: process.env.OPEN_WEATHER_API_KEY,
		units: units || 'metric',
		...(q ? { q } : { lat, lon }),
	};
};
