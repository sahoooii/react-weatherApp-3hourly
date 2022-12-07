import React, { useEffect, useState } from 'react';
import DailyWeather from './DailyWeather';

const Weather = () => {
	const [weatherData, setWeatherData] = useState('');

	const lon = -80.0;
	const lat = 40.0;
	const APIKey = 'afda9fe2cae870ff9ebda89a08e3aa2c';

	useEffect(() => {
		const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${APIKey}`;

		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setWeatherData(data);
			})
			.catch((err) => console.log(err));
	}, []);

	if (weatherData) console.log(weatherData);

	return (
		<div>
			<h1>Weather</h1>
			{weatherData ? (
				weatherData.list.slice(0, 6).map((details, i) => {
					// console.log(details.weather[0].icon);
					// console.log(weatherDetails.icon);
					// console.log(details.main.temp_min);
					console.log(details.dt_txt);
					//3h毎の天気を持ってきている9-24
					return (
						<DailyWeather
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
			)}
		</div>
	);
};

export default Weather;
