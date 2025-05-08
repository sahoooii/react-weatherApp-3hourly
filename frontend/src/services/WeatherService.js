// infoType= weather ? forecast
//searchParams= cityName ? lat ? lod
const getWeatherData = (infoType, searchParams) => {
	// const url = new URL(BASE_URL + '/' + infoType);
	const url = new URL(`http://localhost:5000/api/weather`);
	url.search = new URLSearchParams({ ...searchParams });
	// url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

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
	console.log('lat:', lat);

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
