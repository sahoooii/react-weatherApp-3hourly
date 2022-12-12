import { DateTime } from 'luxon';

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

// 3 hours forecast
const formatThreeHoursWeather = (data) => {
	const { city } = data;
	const { main: lat, lon } = city[0];
};

//edit later for 3 hour
const formatForecastWeather = (data) => {
	let { timezone, daily, hourly } = data;
	daily = daily?.slice(1, 6).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, 'ccc'),
			temp: d.temp.day,
			icon: d.weather[0].icon,
		};
	});

	hourly = hourly?.slice(1, 6).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
			temp: d.temp,
			icon: d.weather[0].icon,
		};
	});

	return { timezone, daily, hourly };
};

//current
const getFormattedWeatherData = async (searchParams) => {
	const formattedCurrentWeather = await getWeatherData(
		'weather',
		searchParams
	).then(formatCurrentWeather);

	//timezone取得方法　3hour forecast
	const { lat, lon } = formattedCurrentWeather;

	//units= imperial ? metric
	const formattedForecastWeather = await getWeatherData('forecast', {
		lat,
		lon,
		exclude: 'current,minutely,alerts',
		units: searchParams.units,
	}).then(formatForecastWeather);

	return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

//format= Wednesday, 31 May 2022 | Local time 12: 45 PM
const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyy' | Local time: 'hh:mm a"
) => DateTime.formatSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (icon) =>
	`http://openweathermap.org/img/wn/${icon}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
