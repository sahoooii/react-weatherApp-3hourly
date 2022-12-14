import { DateTime } from 'luxon';
import ThreeHourWeather from '../Components/ThreeHourWeather';

const API_KEY = 'afda9fe2cae870ff9ebda89a08e3aa2c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// infoType=onecalll ? weather
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

//3 hour forecast
// const formatForecastWeather = (data) => {
// 	data.list.slice(0, 6).map((details, i) => {
// 		return (
// 			<ThreeHourWeather
// 				dateNum={details.dt}
// 				dayIcon={`http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
// 				tempHigh={details.main.temp_max}
// 				tempLow={details.main.temp_min}
// 			/>
// 		);
// 	});
// };

//current
const getFormattedWeatherData = async (searchParams) => {
	const formattedCurrentWeather = await getWeatherData(
		'weather',
		searchParams
	).then(formatCurrentWeather);

	// const array = {...formattedCurrentWeather, ...formattedForecastWeather};
	// console.log(formattedCurrentWeather);
	return formattedCurrentWeather;
};

//format= Wednesday, 31 May 2022 | Local time 12: 45 PM
const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.formatSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (icon) =>
	`http://openweathermap.org/img/wn/${icon}@2x.png`;

export default getFormattedWeatherData;

// export { formatToLocalTime, iconUrlFromCode };
export { iconUrlFromCode, getWeatherData, formatToLocalTime };
