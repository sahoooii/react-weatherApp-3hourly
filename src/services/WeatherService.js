const API_KEY = 'afda9fe2cae870ff9ebda89a08e3aa2c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// infoType=onecalll ? weather ? forecast
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

//current weather
const getFormattedWeatherData = async (searchParams) => {
	const formattedCurrentWeather = await getWeatherData(
		'weather',
		searchParams
	).then(formatCurrentWeather);

	// console.log(formattedCurrentWeather);
	return formattedCurrentWeather;
};

const iconUrlFromCode = (icon) =>
	`http://openweathermap.org/img/wn/${icon}@2x.png`;

	
export default getFormattedWeatherData;

export { iconUrlFromCode, getWeatherData };
