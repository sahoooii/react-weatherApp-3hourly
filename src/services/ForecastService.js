import React, { useEffect, useState } from 'react';
import ThreeHourWeather from '../Components/ThreeHourWeather';
import WeatherService, {
	getWeatherData,
	iconUrlFromCode,
} from './WeatherService';

// const [weatherData, setWeatherData] = useState('');

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

//listから必要なものだけ取得 あとでコメントアウト外す
const formatForecastWeather = (data) => {
	// console.log(formatThreeHoursWeather);
	let threeHourly = data.list.slice(1, 6).map((details, i) => {
		return {
			dateNum: details.dt,
			dayIcon: iconUrlFromCode(details.weather[0].icon),
			tempHigh: details.main.temp_max,
			tempLow: details.main.temp_min,
		};
		// return (
		// 	<ThreeHourWeather
		// 		dateNum={details.dt_txt}
		// 		// dayIcon={`http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
		// 		dayIcon={iconUrlFromCode(details.weather[0].icon)}
		// 		tempHigh={details.main.temp_max}
		// 		tempLow={details.main.temp_min}
		// 	/>
		// );
	});
	return threeHourly;
};

//cityの中からtimezone, lat, lon取得
const formatThreeHoursWeather = (data) => {
	// console.log(data);
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
	// {timezone: 0, lat: 51.5085, lon: -0.1257}取得

	// const formatForecastWeather = (data) => {
	// 	let { timezone } = formattedThreeHourForecast;
	// 	let threeHourly = data.list.slice(1, 6).map((details, i) => {
	// 		return {
	// 			dateNum: details.dt,
	// 			dayIcon: iconUrlFromCode(details.weather[0].icon),
	// 			tempHigh: details.main.temp_max,
	// 			tempLow: details.main.temp_min,
	// 		};
	// 	});
	// 	// console.log(threeHourly);
	// 	return { threeHourly, timezone };
	// };

	const { lat, lon } = formattedThreeHourForecast;

	const formattedForecastWeather = await getWeatherData('forecast', {
		lat,
		lon,
		// timezone,
		units: searchParams.units,
	}).then(formatForecastWeather);

	console.log({
		...formattedForecastWeather,
		...formattedThreeHourForecast,
	});
	// data取得ok

	return { ...formattedForecastWeather, ...formattedThreeHourForecast };
};

// return (
// 	<div>
// 		<h1>Weather</h1>
/* {data ? (
				data.list.slice(0, 6).map((details, i) => {
					// console.log(details.weather[0].icon);
					// console.log(weatherDetails.icon);
					// console.log(details.main.temp_min);
					// console.log(details);
					//3h毎の天気を持ってきている9-24
					return (
						<ThreeHourWeather
							key={i}
							dateNum={details.dt}
							dayIcon={`http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
							tempHigh={details.main.temp_max}
							tempLow={details.main.temp_min}
						/>
					);
				})
			) : (
				<h2>Loading...</h2>
			)} */
// 	</div>
// );

export default getFormattedThreeHoursWeather;

export { formatForecastWeather };
