import { DateTime } from 'luxon';
import { getWeatherData, iconUrlFromCode } from './WeatherService';

// const lon = -0.1257;
// const lat = 51.5085;
// const APIKey = 'afda9fe2cae870ff9ebda89a08e3aa2c';

// useEffect(() => {
// 	// const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;
// 	const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;

// 	fetch(API)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			// console.log(data);
// 			setWeatherData(data);
// 		})
// 		.catch((err) => console.log(err));
// }, []);
//listから必要なものだけ取得 cityからtimezone
const formatForecastWeather = (data) => {
	const { city } = data;
	const { timezone } = city;

	let threeHourly = data.list.slice(0, 5).map((details, i) => {
		// console.log(details);
		let dtToDate = details.dt;
		let dateTxt = details.dt_txt;
		// console.log(formatToLocalTime(dtToDate));

		// console.log(dateTxt);
		// console.log(formatToLocalTime(details.dt, timezone, 'dd LLL yyyy'));
		return {
			time: DateTime.now(),
			date: formatToLocalTime(details.dt, timezone, 'dd LLL yyyy'),
			dateTime: formatToLocalTime(dtToDate, timezone, 'hh:mm a'),
			dayIcon: iconUrlFromCode(details.weather[0].icon),
			tempHigh: details.main.temp_max,
			tempLow: details.main.temp_min,
		};
	});
	return threeHourly;
};

//cityの中からtimezone, lat, lon取得
const formatThreeHoursWeather = (data) => {
	const { city } = data;
	const { timezone } = city;
	const {
		coord: { lat, lon },
	} = city;

	return { timezone, lat, lon };
};

const getFormattedThreeHoursWeather = async (searchParams) => {
	const formattedThreeHourForecast = await getWeatherData(
		'forecast',
		searchParams
	).then(formatThreeHoursWeather);
	// { lat: 51.5085, lon: -0.1257}取得

	// console.log(formattedThreeHourForecast); //lat, lon timezone

	const { lat, lon } = formattedThreeHourForecast;

	const formattedForecastWeather = await getWeatherData('forecast', {
		lat,
		lon,
		units: searchParams.units,
	}).then(formatForecastWeather);

	// console.log(formattedForecastWeather); //formatされたlist

	// console.log([formattedForecastWeather, formattedThreeHourForecast]);

	// return { ...formattedForecastWeather, ...formattedThreeHourForecast };
	return [formattedForecastWeather, formattedThreeHourForecast];
};

//format= Wednesday, 31 May 2022 | Local time 12: 45 PM
const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedThreeHoursWeather;

export { formatForecastWeather, formatToLocalTime };
