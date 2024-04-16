import './App.css';
import { useEffect, useState } from 'react';
import TopButton from './Components/TopButton';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedCurrentWeather from './services/WeatherService';
import getFormattedThreeHourlyWeather from './services/ForecastService';

function App() {
	const coldBg = 'from-cyan-700 to-blue-700';
	const hotBg = 'from-yellow-500 to-red-500';

	//Search city
	const [query, setQuery] = useState({ q: 'tokyo' });
	//°C ?°F
	const [units, setUnits] = useState('metric');
	//Put Current Weather
	const [weather, setWeather] = useState(null);
	//Put threeHourly weather list
	const [threeHourlyWeather, setThreeHourlyWeather] = useState(null);
	//BgColor change
	const [bg, setBg] = useState(coldBg);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchWeather = async () => {
			setLoading(true);

			const currentWeather = await getFormattedCurrentWeather({
				...query,
				units,
			});
			//3hourly weather
			await getFormattedThreeHourlyWeather({
				...query,
				units,
			}).then((forecastData) => {
				// console.log('forecastData:', forecastData);
				const { timezoneInMinutes, threeHourly } = forecastData;
				const currentWeatherAndTimeZone = {
					...currentWeather,
					timezoneInMinutes,
				};

				setWeather(currentWeatherAndTimeZone);
				setThreeHourlyWeather(threeHourly);
				setLoading(false);

				//BgColor change
				const range = units === 'metric' ? 25 : 77;

				if (currentWeather.temp <= range) {
					setBg(coldBg);
				} else {
					setBg(hotBg);
				}
			});
		};

		fetchWeather();
	}, [query, units]);

	return (
		<div
			className={`mx-auto w-[100%] py-12 px-5 md:px-28 lg:px-32 bg-gradient-to-br min-h-[100vh] ${bg}`}
		>
			<div className='xl:w-[85%] mx-auto'>
				<TopButton setQuery={setQuery} />
				<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
			</div>

			<div className='w-[95%] lg:w-[70%] mx-auto'>
				{weather && !loading ? (
					<>
						<TimeAndLocation weather={weather} />
						<TemperatureAndDetails weather={weather} units={units} />
						<Forecast threeHourlyWeather={threeHourlyWeather} />
					</>
				) : (
					<div className='mx-auto text-center text-white text-2xl'>
						Loading...
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
